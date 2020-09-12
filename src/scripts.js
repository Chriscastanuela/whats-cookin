import './css/base.scss';
import './css/styles.scss';

import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';
// import users from './data/users';

import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';
import domUpdates from './dom-updates';
import { data } from 'jquery';

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
  domUpdates.populateCards(recipeData);
  // getFavorites();
}

function fetchUserData() {
  let userId = (Math.floor(Math.random() * 49) + 1);
  fetch("https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData")
  .then(response => response.json())
  .then(data => {
  newUser = data.wcUsersData.find(user => {
    return user.id === Number(userId);
  });
  console.log(newUser);
  user = new User(userId, newUser.name, newUser.pantry);
  pantry = new Pantry(newUser.pantry);
  domUpdates.populateCards(cookbook.recipes);
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
    domUpdates.populateCards(cookbook.recipes);
  }
}

function viewFavorites() {
  if (cardArea.classList.contains('all')) {
    domUpdates.removeAll();
  }
  if (!user.favoriteRecipes.length) {
  domUpdates.showNoFavorites();
    domUpdates.populateCards(cookbook.recipes);
    return
    // we can use break if we are not trying to return anything
  } else {
  domUpdates.displayFavorites(user.favoriteRecipes)
  }
}

function favoriteCard(event) {
  let targetedID;
  if (event.target.id.includes('-')) {
    targetedID = event.target.id.slice(0, event.target.id.indexOf('-'))
        // i think we can delete this if conditional and just have the above line
  } else {
    targetedID = event.target.id
  }
  let specificRecipe = cookbook.recipes.find(recipe => {
    if (recipe.id  === Number(targetedID)) {
      // console.log(recipe);
      // if (recipe.id  === Number(event.target.id)) {
      return recipe;
    }
  })
  console.log(specificRecipe);
  // remove this console log
  if (!event.target.classList.contains('favorite-active')) {
    event.target.classList.add('favorite-active');
    favButton.innerHTML = 'View Favorites';
    user.addToCategory(specificRecipe, "favoriteRecipes");
  } else if (event.target.classList.contains('favorite-active')) {
    event.target.classList.remove('favorite-active');
    user.removeFromCategory(specificRecipe, "favoriteRecipes")
  }
}

function getDirections(event) {
  let targetedID;
  if (event.target.id.includes('-')) {
    targetedID = event.target.id.slice(0, event.target.id.indexOf('-'))
    // i think we can delete this if conditional and just have the above line
  } else {
    targetedID = event.target.id
  }
  let newRecipeInfo = cookbook.recipes.find(recipe => {
    if (recipe.id === Number(targetedID)) {
      return recipe;
    }
  })
  let recipeObject = new Recipe(newRecipeInfo, ingredientsData);
  let cost = recipeObject.calculateCost();
  let costInDollars = (cost / 100).toFixed(2);
  console.log("recipeObject", recipeObject);
  domUpdates.displayDirections(recipeObject, costInDollars);
}

export default scripts;