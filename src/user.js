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
      this[property].push(recipe)
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
    let recipeIds = recipeIngredients.map(i => {
      return i.id;
    })
    recipeIds.forEach(oneI => {
      if (!pantryIds.includes(oneI)) {
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
    let newArray = [];
    recipeIngredients.forEach(dex => {
      if (pantryIds.includes(dex.id)) {
          let theIndex = pantryIds.indexOf(dex.id);
          var newObject = {
          name: dex.name,
          id: dex.id,
          hasEnough: this.pantry[theIndex].amount -= dex.quantity.amount
        }
      } else {
        var newObject = {
        name: dex.name,
        id: dex.id,
        hasEnough: "You don't have any of this item"
        }
      }
      newArray.push(newObject);
    })
    console.log(newArray)
    return newArray;
  }
}

export default User;