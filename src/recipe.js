import ingredientsData from './data/ingredients';

class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = this.gatherIngredients(recipe.ingredients);
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
  }

  calculateCost() {
    let costCounter = 0;
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (Number(specificIngredient.estimatedCostInCents) *
          Number(ingredient.quantity.amount))
        }
      })
    });
    return costCounter;
  }

  gatherIngredients(ingredients) {
return  ingredients.map(ingredient => {
  return {
    id: ingredient.id,
    quantity: ingredient.quantity,
    name: ingredientsData.find(ingredientItem => ingredientItem.id === ingredient.id).name
  }
})

}

}

export default Recipe;
