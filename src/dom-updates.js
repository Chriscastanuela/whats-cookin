import Recipe from './recipe';

import scripts from './scripts';

let favButton = document.querySelector('.view-favorites');
let cardArea = document.querySelector('.all-cards');

let domUpdates = {

  greetUser(name) {
    const userName = document.querySelector('.user-name');
    //should pull this querySelector out of function into global
    userName.innerHTML =
    `${name}`.split(' ')[0] + ' ' + `${name}`.split(' ')[1];
  },

  populateCards(recipes) {
    cardArea.innerHTML = '';
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
    recipes.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', 
        `<article id='${recipe.id}-card' class='card'>
          <header id='${recipe.id}-header' class='card-header'>
              <label for='add-button' class='hidden'>Click to add recipe</label>
              <button id='${recipe.id}-add' aria-label='add-button' class='add-button card-button'></button>
              <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
              <button id='${recipe.id}-favorite' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
          </header>
          <section class="card-body">
            <article id='${recipe.id}-recipie-name' class='recipe-name'>${recipe.name}
              <img id='${recipe.id}-picture' tabindex='0' class='card-picture' src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
            </article>
          </section>
        </article>`)
    })
  },

  removeAll() {
    cardArea.classList.remove('all')
  },

  showNoFavorites() {
    favButton.innerHTML = 'You have no favorites!';
  },

  displayFavorites(userFavorites) {
      favButton.innerHTML = 'Refresh Favorites';
      cardArea.innerHTML = '';
      userFavorites.forEach(recipe => {
        console.log(userFavorites);
        cardArea.insertAdjacentHTML('afterbegin', 
          `<article id='${recipe.id}-card' class='card'>
            <header id='${recipe.id}-header' class='card-header'>
              <label for='add-button' class='hidden'>Click to add recipe</label>
              <button id='${recipe.id}-add' aria-label='add-button' class='add-button card-button'>
              <label for='favorite-button' class='hidden'>Click to favorite recipe
              </label>
              <button id='${recipe.id}-favorite-button' aria-label='favorite-button' class='favorite favorite-active card-button'>
              </button>
            </header>
            <article id='${recipe.id}-recipie-name' class='recipe-name'>${recipe.name}</article>
            <img id='${recipe.id}-picture' tabindex='0' class='card-picture' src='${recipe.image}' alt='Food from recipe'>
          </article>`)
      });
    // }
  },

  displayDirections(recipe, cost) {
    cardArea.classList.add('all');
    cardArea.innerHTML = 
      `<h3>${recipe.name}</h3>
      <p class='all-recipe-info'>
          <strong>It will cost: </strong>
          <span class='cost recipe-info'>$${cost}</span>
          <br><br>
        <strong>You will need: </strong>
        <span class='ingredients recipe-info'></span>
        <strong>Instructions: </strong>
        <ol>
          <span class='instructions recipe-info'>
          </span>
        </ol>
      </p>`;
    let ingredientsSpan = document.querySelector('.ingredients');
    let instructionsSpan = document.querySelector('.instructions');
    // should find a way to either make these selectors global or remove them
    // if kept, change span and rename to not include element type in name
    recipe.ingredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
      ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
      ${ingredient.name}</li></ul>
      `)
    })
    recipe.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', 
      `<li>${instruction.instruction}</li>`)
    })
  },
}

export default domUpdates;