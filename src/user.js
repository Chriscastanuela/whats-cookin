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
          // console.log("index.amount", index.amount);
          // console.log("ingredient.quantity.amount", ingredient.quantity.amount);
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
          var newObject = {
          name: dex.name,
          id: dex.id,
          // hasEnough: dex.quantity.amount -= dex.quantity.amount
          hasEnough: "You got what it takes"
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

  // returnAmount(recipeIngredients) {
  //   recipeIngredients.map(ingredientFromRecipie => {
  //     let pantryItemsThatWeHaveForTheRecipie = this.pantry.filter(pantryItem => {
  //       return pantryItem.ingredient === ingredientFromRecipie.id;
  //       });
  //     // console.log(pantryItemsThatWeHaveForTheRecipie);
  //     let someStuff = pantryItemsThatWeHaveForTheRecipie.reduce((acc, specificPantryItemFromTheRecipie) => {
  //       if (ingredientFromRecipie.id === specificPantryItemFromTheRecipie.ingredient) {
  //         console.log('if')
  //         acc.push({
  //           id: ingredientFromRecipie.id,
  //           name: ingredientFromRecipie.name,
  //           howMuchWeHaveLeftOver: ingredientFromRecipie.quantity.amount -= specificPantryItemFromTheRecipie.amount
  //         })
  //       } else {
  //         console.log('else');
  //         acc.push({howMuchWeHaveLeftOver: "We ain't got none of those!!"})
  //       }
  //       return acc;
  //     }, []);
  //     console.log(someStuff);
  //   })
  // }
}



export default User;