import recipeData from "./data/recipes";

class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }
  doIHaveEnoughForThis(nameOrId) {
    let toggle = "Yes";
    let thisRecipe = recipeData.find(index => {
      return index.id == nameOrId || index.name == nameOrId;
    }).ingredients;
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
  
  howManyIngredientsLeft(nameOrId) {
    let contentsIds = this.contents.map(index => {
      return index.ingredient;
    })
    let notInThere = [];
    let ings = recipeData.find(index => {
      return index.id  == nameOrId || index.name == nameOrId;
    }).ingredients;
    ings.forEach(i => {
      if (!contentsIds.includes(i.id)) {
        notInThere.push(i);
      }
    });
    return notInThere.length;
  }
}

export default Pantry;