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

  // checkPantry(recipeIngredients) {
  //   let toggle = true;
  //   let pantryIds = this.pantry.map(index => {
  //     return index.ingredient;
  //   })
  //   let recipeIds = recipeIngredients.map(index => {
  //     return index.id;
  //   })
  //   let pantryIngredientsInRecipe = this.pantry.filter(ingredient => {
  //     return recipeIds.find(recipeID => {
  //       console.log(ingredient.id === recipeID)
  //       return ingredient.id === recipeID;
  //     });
  //   });

  //   let newArray = [];
  //   let theMap
  //   let pantryIngredientsInRecipe = this.pantry.forEach(ingredient => {
  //     theMap = recipeIngredients.map(i => {
  //       if (ingredient.id == i.id) {
  //         return ingredient;
  //       }
  //     })
  //     newArray.push(theMap[0])
  //   });

  //   recipeIds.forEach(index => {
  //     if (!pantryIds.includes(index)) {
  //       toggle = false
  //     }
  //   })
  //   console.log(pantryIngredientsInRecipe)
  //   let sortedPantryIngredients = pantryIngredientsInRecipe.sort((ingredientA, ingredientB) => {
  //     return ingredientA.id - ingredientB.id;
  //   })
  //   let sortedRecipeIngredients = recipeIngredients.sort((ingredientA, ingredientB) => {
  //     return ingredientA.id - ingredientB.id;
  //   });
  //   // console.log("User -> checkPantry -> sortedPantryIngredients", sortedPantryIngredients)
  //   // console.log("User -> checkPantry -> sortedRecipeIngredients", sortedRecipeIngredients)
  //   sortedRecipeIngredients.forEach((recipeIngredient, index) => {
  //     if (recipeIngredient.quantity.amount > sortedPantryIngredients[index].amount) {
  //       toggle = false;
  //     }
  //   })
  //   return toggle;
  // }


  
// check pantry refactor

  checkPantry(recipeIngredients) {
    let toggle = false;
    let toggleArray = []
    let recipeIngredientsForRecipe = this.returnAmount(recipeIngredients)
    let recipeIds = recipeIngredients.map(index => {
      return index.id;
    });
    // console.log('recipeIds', recipeIds)
    // console.log('recipeIngredients', recipeIngredients);
    let pantryIngredientsInRecipe = this.pantry.filter(ingredient => {
      let foundIngredients = recipeIds.find(recipeID => {
        return ingredient.ingredient === recipeID;
      });
      // console.log(foundIngredients);
      return foundIngredients != undefined; 
    });

    let sortedPantryIngredients = pantryIngredientsInRecipe.sort((ingredientA, ingredientB) => {
        return ingredientA.ingredient - ingredientB.ingredient;
      })
    let sortedRecipeIngredients = recipeIngredientsForRecipe.sort((ingredientA, ingredientB) => {
      return ingredientA.ingredientID - ingredientB.ingredientID;
    });
    // console.log("User -> checkPantry -> sortedPantryIngredients", sortedPantryIngredients)
    // console.log("User -> checkPantry -> sortedRecipeIngredients", sortedRecipeIngredients)
    // console.log('pantryIngredientsInRecipe',pantryIngredientsInRecipe)
    sortedRecipeIngredients.forEach((ingredient, index) => {
      // console.log(`pantryIngredientsInRecipe[${index}]`, sortedPantryIngredients[index])
      // console.log("ingredient.ingredientModifcation", ingredient.ingredientModification)
      // console.log("User -> checkPantry -> sortedPantryIngredients[index].amount + ingredient.ingredientModifcation", sortedPantryIngredients[index].amount + parseInt(ingredient.ingredientModification))
      if (sortedPantryIngredients[index] && sortedPantryIngredients[index].amount + parseInt(ingredient.ingredientModification) > 0) {
        toggleArray.push(true);
      } else {
        toggleArray.push(false);
      }
    })
    let toggleDecider = toggleArray.find(element => {
      return element === false;
    });
    console.log("User -> checkPantry -> toggleDecider", toggleDecider)
    if (toggleDecider === undefined) {
      toggle = true;
    }
    console.log("toggleArray", toggleArray)
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
      // if (pantryIds.includes(ingredient.id)) {
        let index = pantryIds.indexOf(ingredient.id);
        var ingredientData = {
          userID: this.id,
          ingredientID: ingredient.id,
          ingredientModification: -ingredient.quantity.amount
          // ingredientModification: this.pantry[index].amount -= ingredient.quantity.amount
        }
      // } else {
      //   var ingredientData = {
      //     userID: this.id,
      //     ingredientID: ingredient.id,
      //     ingredientModification: -ingredient.quantity.amount
      //   }
      // }
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

  cook(recipeID, recipeData) {
    this.recipesToCook.forEach((recipeToCook, index) => {
      if (recipeToCook.id === recipeID) {
        this.recipesToCook.splice(index, 1);
      }
    });
    // let currentRecipe = recipeData[0]
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
      .then(data => console.log(this.recipesToCook))
      // .catch(err => alert('You don\'t have enough ingredients for this recipe! Error:', err));
    });
  }
}

export default User;