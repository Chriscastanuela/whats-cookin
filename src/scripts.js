import './css/base.scss';
import './css/styles.scss';

import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';

import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';
import domUpdates from './dom-updates';

let homeButton = document.querySelector('.home');
let favButton = document.querySelector('.view-favorites');
let cardArea = document.querySelector('.all-cards');


let cookbook = new Cookbook(recipeData);
let user, pantry, newUser;

window.onload = onStartup();

homeButton.addEventListener('click', cardButtonConditionals);
favButton.addEventListener('click', viewFavorites);
cardArea.addEventListener('click', cardButtonConditionals);

function onStartup() {
  fetchUserData();
  domUpdates.populateCards(recipeData, cardArea);
}

function fetchUserData() {
  let userId = (Math.floor(Math.random() * 49) + 1);
  fetch("https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData")
  .then(response => response.json())
  .then(data => {
  newUser = data.wcUsersData.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry);
  pantry = new Pantry(newUser.pantry);
  domUpdates.populateCards(cookbook.recipes, cardArea);
  domUpdates.greetUser(user.name);
  getFavorites();
})
  .catch(err => console.log("err", err));
}

//<---------------------------------------------------------------

function getFavorites() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
    })
  } else return
}

function cardButtonConditionals(event) {
  if (event.target.classList.contains('favorite')) {
    favoriteCard(event);
  } else if (event.target.classList.contains('card-picture')) {
    getDirections(event);
  } else if (event.target.classList.contains('home')) {
    favButton.innerHTML = 'View Favorites';
    domUpdates.populateCards(cookbook.recipes, cardArea);
  }
}

function viewFavorites() {
  if (cardArea.classList.contains('all')) {
    domUpdates.removeAll(cardArea);
  }
  if (!user.favoriteRecipes.length) {
  domUpdates.showNoFavorites(favButton);
    domUpdates.populateCards(cookbook.recipes, cardArea);
    return
    // we can use break if we are not trying to return anything
  } else {
  domUpdates.displayFavorites(user.favoriteRecipes, favButton, cardArea)
  }
}

function favoriteCard(event) {
  let targetedID = event.target.id.slice(0, event.target.id.indexOf('-'));
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id  === Number(targetedID));
  if (!event.target.classList.contains('favorite-active')) {
    user.addToCategory(specificRecipe, "favoriteRecipes");
    // domUpdates.favoritesToggle(event.target);
  } else {
    user.removeFromCategory(specificRecipe, "favoriteRecipes");
    // domUpdates.favoritesToggle(event.target);
  }
  domUpdates.favoritesToggle(event.target);
}

function getDirections(event) {

    let targetedID = event.target.id.slice(0, event.target.id.indexOf('-'))
    // i think we can delete this if conditional and just have the above line
  // } else {
  //   targetedID = event.target.id
  // }
  let newRecipeInfo = cookbook.recipes.find(recipe => {
    if (recipe.id === Number(targetedID)) {
      return recipe;
    }
  })
  let recipeObject = new Recipe(newRecipeInfo, ingredientsData);
  let cost = recipeObject.calculateCost();
  let costInDollars = (cost / 100).toFixed(2);
  domUpdates.displayDirections(recipeObject, costInDollars, cardArea);
}