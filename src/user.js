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
    let toggle;
    toggle = 'You have the ingredients!';
    let pantryIds = this.pantry.map(index => {
      return index.ingredient;
    })
    let recipeIds = recipeIngredients.map(i => {
      return i.id;
    })
    recipeIds.forEach(oneI => {
      if (!pantryIds.includes(oneI)) {
        toggle = 'You do not have the ingredients.'
      }
    })
    return toggle;
  }
}
// 'You have the ingredients!'
// 'You do not have the ingredients.'

export default User;
