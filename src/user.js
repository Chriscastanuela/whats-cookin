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
    let toggle = true;
    let pantryIds = this.pantry.map(index => {
      return index.ingredient;
    })
    let recipeIds = recipeIngredients.map(index => {
      return index.id;
    })
    recipeIds.forEach(index => {
      if (!pantryIds.includes(index)) {
        toggle = false
      }
    })
    return toggle;
  }

  cookMeal(recipeIngredients) {
    if (!this.checkPantry(recipeIngredients)) {
      return "Not enough ingredients for this"
    }
    recipeIngredients.forEach(ingredient => {
      this.pantry.forEach(index => {
        if (index.ingredient == ingredient.id) {
          index.amount -= ingredient.quantity.amount;
        } 
      })
    })
  }

  returnAmount(recipeIngredients) {
    let pantryIds = this.pantry.map(index => index.ingredient);
    let recipeIngredientsFromPantry = [];
    recipeIngredients.forEach(ingredient => {
      if (pantryIds.includes(ingredient.id)) {
        let index = pantryIds.indexOf(ingredient.id);
        var ingredientData = {
          userID: this.id,
          ingredientID: ingredient.id,
          ingredientModification: this.pantry[index].amount -= ingredient.quantity.amount
        }
      } else {
        var ingredientData = {
          userID: this.id,
          ingredientID: ingredient.id,
          ingredientModification: -ingredient.quantity.amount
        }
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
      return ingredient.id == negativeGrocery.id;
    })
    foundIngredients.push(foundIngredient);
    negativeGrocery.groceryListCost = foundIngredients[foundIngredients.length-1].estimatedCostInCents * negativeGrocery.ingredientModification;
    return negativeGrocery;
    })
    return shoppingList;
  }
}

export default User;