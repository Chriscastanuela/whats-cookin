let domUpdates = {

  greetUser(name) {
    const userName = document.querySelector('.user-name');
    userName.innerHTML =
    `${name}`.split(' ')[0] + ' ' + `${name}`.split(' ')[1];
  },

  populateCards(recipes, cardArea, userFavorites) {
    cardArea.innerHTML = '';
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
    if (recipes) {
      recipes.forEach(recipe => {
        this.renderCards(recipe, cardArea, userFavorites);
      });
    } else {
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
        .then(response => response.json())
        .then(data => {
          data.recipeData.forEach(recipe => {
            this.renderCards(recipe, cardArea, userFavorites);
          });
        })
        .catch(err => console.log("err", err));
    }
  },

  renderCards(recipe, cardArea, userFavorites) {
    let isFavorite;
    if (userFavorites && userFavorites.find(favoriteRecipe => favoriteRecipe.id === recipe.id)) {
      isFavorite = 'favorite-active';
    } else {
      isFavorite = '';
    }
    cardArea.insertAdjacentHTML('afterbegin', 
      `<article id='${recipe.id}-card' class='card'>
        <header id='${recipe.id}-header' class='card-header'>
            <label for='add-button' class='hidden'>Click to add recipe</label>
            <button id='${recipe.id}-add' aria-label='add-button' class='add-button card-button'></button>
            <button class='cook-button' id='${recipe.id}-cook'>Cook This!</button>
            <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
            <button id='${recipe.id}-favorite' aria-label='favorite-button' class='favorite ${isFavorite} card-button'></button>
        </header>
        <section class="card-body">
          <article id='${recipe.id}-recipie-name' class='recipe-name'>${recipe.name}
            <img id='${recipe.id}-picture' tabindex='0' class='card-picture' src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
          </article>
        </section>
      </article>`)
  },

  removeAll(cardArea) {
    cardArea.classList.remove('all')
  },

  showNoFavorites(favButton) {
    favButton.innerHTML = 'You have no favorites!';
  },

  showNoCookList(recipesToCookButton) {
    recipesToCookButton.innerHTML = "You have no cooklist!";
  },

  displayDirections(recipe, cost, cardArea) {
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

  favoritesAdd(target) {
    target.classList.add('favorite-active');
  },

  favoritesRemove(target) {
    target.classList.remove('favorite-active');
  },

  refreshFavorites(favButton) {
    favButton.innerHTML = 'Refresh Favorites';
  }
}

export default domUpdates;
