class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }
  doIHaveEnoughForThis(nameOrId, recipeData) {
    let toggle = "Yes";
    let thisRecipe = recipeData.find(index => {
      return index.id === nameOrId || index.name === nameOrId;
    }).ingredients;
    thisRecipe.forEach(i => {
      if (!this.contents[i]) {
        toggle = "No"
      } else {
        this.contents.forEach(index => {
          if (index.amount >= index.quantity.amount) {
            toggle === "Yes";
          }
        })
      }
    });
    return toggle;
  }

  howManyIngredientsLeft(nameOrId, recipeData) {
    let contentsIds = this.contents.map(index => {
      return index.ingredient;
    })
    let notInThere = [];
    let ingredientFromRecipe = recipeData.find(index => {
      return index.id  === nameOrId || index.name === nameOrId;
    });
    ingredientFromRecipe.ingredients.forEach(index => {
      if (!contentsIds.includes(index.id)) {
        notInThere.push(index);
      }
    });
    return notInThere.length;
  }
}

export default Pantry;
