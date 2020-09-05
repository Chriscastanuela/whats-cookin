import recipeData from "./data/recipes";

class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }
  doIHaveEnoughForThis(nameOrId) {
    let toggle = "Yes";
    let thisRecipe = recipeData.find(index => {
      return index.id || index.name == nameOrId;
    }).ingredients;
    console.log("Ingredients", thisRecipe);
    thisRecipe.forEach(index => {
      if (!this.contents[index]) {
        toggle = "No"
      } else {
        this.contents.forEach(i => {
          if (i.amount >= index.quantity.amount) {
            toggle == "Yes";
          }
        })
      }
    });
    return toggle;
  };
}

export default Pantry;