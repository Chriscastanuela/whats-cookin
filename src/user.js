class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToCategory(recipe, property) {
    if (!this[property].includes(recipe)) {
      this[property].push(recipe);
    }
  }

  removeFromCategory(recipe, property) {
    const i = this[property].indexOf(recipe);
    this[property].splice(i, 1)
  }

  filterRecipes(tag, property) {
    return this[property].filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findInCategory(strgToSrch, property) {
    return this[property].filter(recipe => {
      return recipe.name.includes(strgToSrch)
      || recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(strgToSrch)
      });
    });
  }

  checkPantry(recipeIngredients) {
    let toggle = false;
    let toggleArray = []
    let recipeIngredientsForRecipe = this.returnAmount(recipeIngredients)
    let recipeIds = recipeIngredients.map(index => {
      return index.id;
    });
    let pantryIngredientsInRecipe = this.pantry.filter(ingredient => {
      let foundIngredients = recipeIds.find(recipeID => {
        return ingredient.ingredient === recipeID;
      });
      return foundIngredients !== undefined; 
    });

    let sortedPantryIngredients = pantryIngredientsInRecipe.sort((ingredientA, ingredientB) => {
      return ingredientA.ingredient - ingredientB.ingredient;
    })
    let sortedRecipeIngredients = recipeIngredientsForRecipe.sort((ingredientA, ingredientB) => {
      return ingredientA.ingredientID - ingredientB.ingredientID;
    });
    sortedRecipeIngredients.forEach((ingredient, index) => {
      if (sortedPantryIngredients[index] && sortedPantryIngredients[index].amount + parseInt(ingredient.ingredientModification) >= 0) {
        toggleArray.push(true);
      } else {
        toggleArray.push(false);
      }
    })
    let toggleDecider = toggleArray.find(element => {
      return element === false;
    });
    if (toggleDecider === undefined) {
      toggle = true;
    }
    return toggle;
  }

  returnAmount(recipeIngredients) {
    let recipeIngredientsFromPantry = [];
    recipeIngredients.forEach(ingredient => {
      var ingredientData = {
        userID: this.id,
        ingredientID: ingredient.id,
        ingredientModification: -ingredient.quantity.amount
      }
      recipeIngredientsFromPantry.push(ingredientData);
    })
    return recipeIngredientsFromPantry;
  }

  returnShoppingList(recipeIngredients, ingredientsData) {
    let groceries = this.returnAmount(recipeIngredients);
    let notEnoughGroceries = groceries.filter(ingredient => {
      return ingredient.ingredientModification < 0
    })
    let foundIngredients = [];
    let shoppingList = notEnoughGroceries.map(negativeGrocery => {
      let foundIngredient = ingredientsData.find(ingredient => {
        return ingredient.id === negativeGrocery.id;
      });
      foundIngredients.push(foundIngredient);
      negativeGrocery.groceryListCost = foundIngredients[foundIngredients.length - 1].estimatedCostInCents * negativeGrocery.ingredientModification;
      return negativeGrocery;
    });
    return shoppingList;
  }

  cook(recipeID, recipeData, userId) {
    this.recipesToCook.forEach((recipeToCook, index) => {
      if (recipeToCook.id === recipeID) {
        this.recipesToCook.splice(index, 1);
      }
    });
    let currentRecipe = recipeData.find(recipe => recipe.id === recipeID)
    let ingredientsToRemove = this.returnAmount(currentRecipe.ingredients)
    ingredientsToRemove.forEach(ingredient => {
      let int = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingredient)
      }
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', int)
        .then(response => response.json())
        .then(data => data)
        .then(
          fetch("https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData")
            .then(response => response.json())
            .then(data => {
              let userData = data.wcUsersData.find(user => {
                return user.id === Number(userId);
              });
              this.pantry = userData.pantry;
            })
            .catch(err => console.log("err", err))
        )
        .catch(err => console.log(err));
    });
  }
}

export default User;