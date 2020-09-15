const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');

import User from '../src/user.js';
import recipeData from '../src/data/recipes.js'
import Recipe from '../src/recipe.js';
import ingredientsData from '../src/data/ingredients';

chai.use(spies);

let user1, user2, user3, pizzaRecipeData, pizzaRecipe, recipeFortySeven, recipeOne;

describe('User', () => {
  beforeEach(() => {

    user1 = new User(1, 'Boba', [
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
      // recipeOne
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
      {
        "ingredient": 2047,
        "amount": 0.5,
      },
      {
        "ingredient": 1012047,
        "amount": 24,
      },
      {
        "ingredient": 10019903,
        "amount": 2,
      },
      {
        "ingredient": 1145,
        "amount": 0.5,
      },
      {
        "ingredient": 2050,
        "amount": 0.5,
      },
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

    user2 = new User(1, 'Boba', [
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
      {
        "ingredient": 2047,
        "amount": 0.5,
      },
      {
        "ingredient": 1012047,
        "amount": 24,
      },
      {
        "ingredient": 10019903,
        "amount": 2,
      },
      {
        "ingredient": 1145,
        "amount": 0.5,
      },
      {
        "ingredient": 2050,
        "amount": 0.5,
      }
    ]
    );

    user3 = new User(3, 'Tim', [
      {
        "ingredient": 1041009,
        "amount": 14
      },
      {
        "ingredient": 10018413,
        "amount": 1
      },
      {
        "ingredient": 2044,
        "amount": 10
      },
      {
        "ingredient": 10111529,
        "amount": 16
      },
      {
        "ingredient": 4053,
        "amount": 2
      },
      {
        "ingredient": 11477,
        "amount": 2
      }
    ]
    );

    pizzaRecipeData = {
      "id": 601216,
      "image": "https://spoonacular.com/recipeImages/601216-556x370.jpg",
      "ingredients": [
        {
          "id": 1041009,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10018413,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 2044,
          "quantity": {
            "amount": 3,
            "unit": "leaves"
          }
        },
        {
          "id": 10111529,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11477,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        }
      ],
      "instructions": [{
        "instruction": "Saute the zucchini in the olive oil on high heat. Season generously with salt and pepper. Stir and leave alone for a little while, so you get a little bit of texture from the browning on the zucchini.While you’re sauteing, toast the flatbread in the oven at 400 degrees.When the zucchini is soft and just slightly browned, remove from the heat. Take the flatbread out of the oven and spread the zucchini on the flatbread.Top with the fresh tomatoes, cheese, and fresh basil.",
        "number": 1
      },
      {
        "instruction": "Cut, serve, and enjoy!",
        "number": 2
      }],
      "name": "Farmer’s Market Flatbread Pizza",
      "tags": [
        "side dish"
      ]
    }

    pizzaRecipe = new Recipe(pizzaRecipeData, ingredientsData)

    recipeFortySeven = new Recipe(recipeData[47], ingredientsData);

    recipeOne = new Recipe(recipeData[0], ingredientsData);
    
    chai.spy.on(user1, ['cook'], () => true);
  });

  afterEach(() => {
    chai.spy.restore(user1);
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
    expect(user3.checkPantry(pizzaRecipe.ingredients)).to.eql(true);
  });

  it('8. Should be able to check the pantry and tell you if you do not have the ingredients for a given recipe', () => {
    expect(user1.checkPantry(recipeFortySeven.ingredients)).to.eql(false);
  });

  it('9. Should be able to give you a list of what ingredients a user needs to buy and how much it will cost for a given recipe', () => {
    expect(user2.returnShoppingList(recipeOne.ingredients, ingredientsData)).to.eql([
      {
        userID: 1,
        ingredientID: 20081,
        ingredientModification: -1.5,
        groceryListCost: -307.5
      },
      {
        userID: 1,
        ingredientID: 18372,
        ingredientModification: -0.5,
        groceryListCost: -102.5
      },
      {
        userID: 1,
        ingredientID: 1123,
        ingredientModification: -1,
        groceryListCost: -205
      },
      {
        userID: 1,
        ingredientID: 19335,
        ingredientModification: -0.5,
        groceryListCost: -102.5
      },
      {
        userID: 1,
        ingredientID: 19206,
        ingredientModification: -3,
        groceryListCost: -615
      },
      {
        userID: 1,
        ingredientID: 19334,
        ingredientModification: -0.5,
        groceryListCost: -102.5
      },
      {
        userID: 1,
        ingredientID: 2047,
        ingredientModification: -0.5,
        groceryListCost: -102.5
      },
      {
        userID: 1,
        ingredientID: 1012047,
        ingredientModification: -24,
        groceryListCost: -4920
      },
      {
        userID: 1,
        ingredientID: 10019903,
        ingredientModification: -2,
        groceryListCost: -410
      },
      {
        userID: 1,
        ingredientID: 1145,
        ingredientModification: -0.5,
        groceryListCost: -102.5
      },
      {
        userID: 1,
        ingredientID: 2050,
        ingredientModification: -0.5,
        groceryListCost: -102.5
      }
    ])
  });
  
  it('10. Should check quantities for each ingredient', () => {
    expect(user2.returnAmount(recipeOne.ingredients)).to.eql([
      { userID: 1, ingredientID: 20081, ingredientModification: -1.5 },
      { userID: 1, ingredientID: 18372, ingredientModification: -0.5 },
      { userID: 1, ingredientID: 1123, ingredientModification: -1 },
      { userID: 1, ingredientID: 19335, ingredientModification: -0.5 },
      { userID: 1, ingredientID: 19206, ingredientModification: -3 },
      { userID: 1, ingredientID: 19334, ingredientModification: -0.5 },
      { userID: 1, ingredientID: 2047, ingredientModification: -0.5 },
      { userID: 1, ingredientID: 1012047, ingredientModification: -24 },
      { userID: 1, ingredientID: 10019903, ingredientModification: -2 },
      { userID: 1, ingredientID: 1145, ingredientModification: -0.5 },
      { userID: 1, ingredientID: 2050, ingredientModification: -0.5 }
    ]);
  });

  it('11. Should be able to cook a recipe', () => {
    user1.cook(recipeData[47]);
    expect(user1.cook).to.have.been.called(1);
  });
});