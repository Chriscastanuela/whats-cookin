import { expect } from 'chai';

import User from '../src/user.js';
import recipeData from '../src/data/recipes.js'
import Recipe from '../src/recipe.js';
import ingredientsData from '../src/data/ingredients';

let user1;
let recipeFortySeven;
let recipeOne;

describe('User', () => {
  beforeEach(() => {

    user1 = new User(1, 'Boba', /*pantry*/[
      {
        'ingredient': 1077,
        'amount': 1
      },
      {
        'ingredient': 14412,
        'amount': 1
      },
      {
        'ingredient': 1009054,
        'amount': 3
      },
      //
      //
      //
      //recipeOne
      {
        "ingredient": 20081,
        "amount": 1.5,
      },
      {
        "ingredient": 18372,
        "amount": 0.5,
      },
      {
        "ingredient": 1123,
        "amount": 1,
      },
      {
        "ingredient": 19335,
        "amount": 0.5,
      },
      {
        "ingredient": 19206,
        "amount": 3,
      },
      {
        "ingredient": 19334,
        "amount": 0.5,
      },
      // {
      //   "ingredient": 2047,
      //   "amount": 0.5,
      // },
      // {
      //   "ingredient": 1012047,
      //   "amount": 24,
      // },
      // {
      //   "ingredient": 10019903,
      //   "amount": 2,
      // },
      // {
      //   "ingredient": 1145,
      //   "amount": 0.5,
      // },
      // {
      //   "ingredient": 2050,
      //   "amount": 0.5,
      // },
      //
      //
      //recipe47
      {
        "ingredient": 1041009,
        "amount": 2,
      },
      {
        "ingredient": 10018413,
        "amount": 1,
      },
      {
        "ingredient": 2044,
        "amount": 3,
      },
      {
        "ingredient": 10111529,
        "amount": 0.5,
      },
      {
        "ingredient": 4053,
        "amount": 1,
      },
      {
        "ingredient": 19208401924,
        "amount": 1,
      }
    ]
    );

    recipeFortySeven = new Recipe(recipeData[47], ingredientsData);

    recipeOne = new Recipe(recipeData[0], ingredientsData);

  });

  it('1. Should have a property of favoriteRecipes with a default value', () => {
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('2. Should be able to add recipes to favoriteRecipes', () =>{
    user1.addToCategory(recipeData[0], 'favoriteRecipes')
    expect(user1.favoriteRecipes.includes(recipeData[0])).to.eql(true);
  });

  it('3. Should have a property of recipesToCook with a default value', () => {
    expect(user1.recipesToCook).to.eql([]);
  });

  it('4. Should be able to remove recipes from favoriteRecipes', () =>{
    user1.removeFromCategory(recipeData, 'favoriteRecipes');
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('5. Should be able to filter through favoriteRecipes by tag', () => {
    user1.addToCategory(recipeData[0], 'favoriteRecipes');
    user1.addToCategory(recipeData[1], 'favoriteRecipes');
    expect(user1.filterRecipes('antipasti', 'favoriteRecipes')).to.eql([recipeData[0]]);
  });

  it('6. Should be able to search favoriteRecipes by name or ingredient', () => {
    user1.addToCategory(recipeData[0], 'favoriteRecipes');
    user1.addToCategory(recipeData[1], 'favoriteRecipes');
    expect(user1.findInCategory('egg', 'favoriteRecipes')).to.eql([recipeData[0]]);
  });

  it('7. Should be able to check the pantry and tell you if you have the ingredients for a given recipe', () => {
    
    expect(user1.checkPantry(recipeOne.ingredients)).to.eql(true);

  });

  it('8. Should be able to check the pantry and tell you if you do not have the ingredients for a given recipe', () => {

    expect(user1.checkPantry(recipeFortySeven.ingredients)).to.eql(false);

  });

  // it.skip('9. Should be able to give you a list of what ingredients a user needs to buy and how much it will cost for a given recipe', () => {

  //   expect(user1.checkPantry(recipe.ingredients)).to.eql(/* <-----------------------------> */);

  // });

  it('10. Should be able to cook the meal if the pantry has enough ingredients', () => {

    expect(user1.cookMeal(recipeFortySeven.ingredients)).to.eql("Not enough ingredients for this");

  });

  it('11. Should be able to cook the meal if the pantry has enough ingredients', () => {
    
    user1.cookMeal(recipeOne.ingredients)

    expect(user1.pantry[13].amount).to.eql(0);

  });
  
  it('12. Should be able to check quantities for each ingredient', () => {

    // console.log(".......................", recipeData[47]);
    //'Farmer’s Market Flatbread Pizza'
    /*
    { name: 'cheese', id: 1041009, quantity: [Object] },
    { name: 'flatbread', id: 10018413, quantity: [Object] },
    { name: 'fresh basil', id: 2044, quantity: [Object] },
    { name: 'grape tomatoes', id: 10111529, quantity: [Object] },
    { name: 'olive oil', id: 4053, quantity: [Object] },
    { name: 'zucchini', id: 11477, quantity: [Object] }
    */
    expect(user1.returnAmount(recipeOne.ingredients)).to.eql(recipeData[47]);

  });
});

/*

End result: a list of what ingredients they need to buy, and how much it will cost
  array of objects

  // returnAmount(recipeIngredients) {
  //   recipeIngredients.reduce((acc, i) => {
  //     //
  //   }, []);
  // }
*/