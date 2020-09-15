import './css/base.scss';
import './css/styles.scss';

import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import domUpdates from './dom-updates';

let homeButton = document.querySelector('.home');
let favButton = document.querySelector('.view-favorites');
let recipesToCookButton = document.querySelector('.view-recipies-to-cook');
let cardArea = document.querySelector('.all-cards');

let user, pantry, newUser, recipeData, ingredientsData;

window.onload = 
  fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
    .then(response => response.json())
    .then(data => recipeData = data.recipeData)
    .then(
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
        .then(response => response.json())
        .then(data => ingredientsData = data)
        .catch(err => console.log("err", err))
    )
    .then(onStartup())
    .catch(err => console.log("err", err));
homeButton.addEventListener('click', cardButtonConditionals);
favButton.addEventListener('click', viewFavorites);
cardArea.addEventListener('click', cardButtonConditionals);
recipesToCookButton.addEventListener('click', viewRecipiesToCook);

function onStartup() {
  fetchUserData();
  domUpdates.populateCards(recipeData, cardArea);
}

function fetchUserData() {
  let userId = 1;
  fetch("https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData")
  .then(response => response.json())
  .then(data => {
  newUser = data.wcUsersData.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry);
  pantry = new Pantry(newUser.pantry);
  domUpdates.populateCards(recipeData, cardArea, user.favoriteRecipes);
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

function getCookButtons() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      document.querySelector(`.cook-${recipe.id}`).classList.add('favorite-active')
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
    domUpdates.populateCards(recipeData, cardArea, user.favoriteRecipes);
  } else if (event.target.classList.contains('add-button')) {
    addRecipeToCookList(event);
  }
  else if (event.target.classList.contains('cook-button')) {
    cookCard(event);
  }
}

function viewFavorites() {
  if (cardArea.classList.contains('all')) {
    domUpdates.removeAll(cardArea);
  }
  if (!user.favoriteRecipes.length) {
  domUpdates.showNoFavorites(favButton);
    domUpdates.populateCards(recipeData, cardArea);
    return
    // we can use break if we are not trying to return anything
  } else {
  domUpdates.populateCards(user.favoriteRecipes, cardArea, user.favoriteRecipes);
  domUpdates.refreshFavorites(favButton);
  }
}

function viewRecipiesToCook() {
  favButton.innerHTML = 'View Favorites';
  if (cardArea.classList.contains('all')) {
    domUpdates.removeAll(cardArea);
  }
  if (!user.recipesToCook.length) {
    domUpdates.showNoCookList(recipesToCookButton);
    domUpdates.populateCards(recipeData, cardArea);
    return
  } else {
    domUpdates.populateCards(user.recipesToCook, cardArea, user.favoriteRecipes);
    // domUpdates.refreshFavorites(favButton);
  }
}

function favoriteCard(event) {
  let targetedID = event.target.id.slice(0, event.target.id.indexOf('-'));
  let specificRecipe = recipeData.find(recipe => recipe.id  === Number(targetedID));
  if (!event.target.classList.contains('favorite-active')) {
    // is the above line using the DOM to update the data model? Should be an easy fix
    user.addToCategory(specificRecipe, "favoriteRecipes");
    domUpdates.favoritesAdd(event.target);
  } else {
    user.removeFromCategory(specificRecipe, "favoriteRecipes");
    domUpdates.favoritesRemove(event.target);
  }
}

function cookCard(event) {
  let targetedID = event.target.id.slice(0, event.target.id.indexOf('-'));
  console.log(targetedID);
  user.cook(targetedID, recipeData);
}

function addRecipeToCookList(event) {
  let targetedID = event.target.id.slice(0, event.target.id.indexOf('-'));
  let specificRecipe = recipeData.find(recipe => recipe.id  === Number(targetedID));
  if (!user.recipesToCook.includes(specificRecipe)) {
    user.addToCategory(specificRecipe, "recipesToCook");
  }
}

function getDirections(event) {
  let targetedID = event.target.id.slice(0, event.target.id.indexOf('-'))
  let newRecipeInfo = recipeData.find(recipe => recipe.id === Number(targetedID))
  let recipeObject = new Recipe(newRecipeInfo, ingredientsData.ingredientsData);
  let cost = recipeObject.calculateCost();
  let costInDollars = (cost / 100).toFixed(2);
  domUpdates.displayDirections(recipeObject, costInDollars, cardArea);
}