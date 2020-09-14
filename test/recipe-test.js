import { expect } from 'chai';

import Recipe from '../src/recipe.js';
// import ingredientsData from '../src/data/ingredients.js';

let ingredientsData; 



describe('Recipe', () => {
  let recipe;
  let recipeData;
  beforeEach(() => {
    ingredientsData = [
      {
        "id": 1041009,
        "name": "cheese",
        "estimatedCostInCents": 850
      },
      {
        "id": 10018413,
        "name": "flatbread",
        "estimatedCostInCents": 326
      },
      {
        "id": 2044,
        "name": "fresh basil",
        "estimatedCostInCents": 203
      },
      {
        "id": 10111529,
        "name": "grape tomato",
        "estimatedCostInCents": 168
      },
      {
        "id": 4053,
        "name": "pure olive oil",
        "estimatedCostInCents": 705
      },
      {
        "id": 11477,
        "name": "zucchini squash",
        "estimatedCostInCents": 742
      }
    ]

    recipeData = {
      "name": "Farmer’s Market Flatbread Pizza",
      "id": 601216,
      "image": "https://spoonacular.com/recipeImages/601216-556x370.jpg",
      "ingredients": [
        {
          "id": 1041009,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          },
          "name": "cheese"
        },
        {
          "id": 10018413,
          "quantity": {
            "amount": 1,
            "unit": ""
          },
          "name": "flatbread",
        },
        {
          "id": 2044,
          "quantity": {
            "amount": 3,
            "unit": "leaves"
          },
          "name": "fresh basil",
        },
        {
          "id": 10111529,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          },
          "name": "grape tomato",
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          },
          "name": "pure olive oil",
        },
        {
          "id": 11477,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          },
          "name": "zucchini squash"
        }
      ]
    }
      
    recipe = new Recipe(recipeData, ingredientsData);
  });

  describe('Recipe Data', () => {

    it('Should hold its own ingredient data', () => {
      expect(recipe.ingredientsData).to.equal(ingredientsData);
    });

    it('Should hold its own instruction data', () => {
      expect(recipe.instructions).to.equal(recipeData.instructions);
    });
  });

  it('Should be able to calculate the cost of its ingredients', () => {
    expect(recipe.calculateCost()).to.equal(4166);
  });


});
