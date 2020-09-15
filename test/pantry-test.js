import { expect } from 'chai';

import Pantry from '../src/pantry.js';
import User from '../src/user.js';
import recipeData from '../src/data/recipes';

let pantry;

describe('Pantry', () => {
  beforeEach(() => {
    let user1 = new User(1, 'Boba', [
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
      {
        'ingredient': 2050,
        'amount': .5
      }]
    );
    pantry = new Pantry(user1.pantry);
  });

  it('1. should tell you if your pantry has enough ingredients for a recipe', () => {
    expect(pantry.doIHaveEnoughForThis("Loaded Chocolate Chip Pudding Cookie Cups", recipeData)).to.eql("No");
  });

  it('2. should determine the amount of ingredients in a given meal that I do not have in my pantry', () => {
    expect(pantry.howManyIngredientsLeft("Loaded Chocolate Chip Pudding Cookie Cups", recipeData)).to.eql(10);
  });
});