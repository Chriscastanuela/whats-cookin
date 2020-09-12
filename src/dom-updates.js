class DomUpdates {
  constructor() {

  }
  
  viewFavorites() {
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
    if (!user.favoriteRecipes.length) {
      favButton.innerHTML = 'You have no favorites!';
      populateCards(cookbook.recipes);
      return
      // we can use break if we are not trying to return anything
    } else {
      favButton.innerHTML = 'Refresh Favorites';
      cardArea.innerHTML = '';
      user.favoriteRecipes.forEach(recipe => {
        console.log(user.favoriteRecipes);
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
    }
  }

  greetUser() {
    const userName = document.querySelector('.user-name');
    //should pull this querySelector out of function into global
    userName.innerHTML =
    user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
  }

  favoriteCard(event) {
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

  cardButtonConditionals(event) {
    if (event.target.classList.contains('favorite')) {
      favoriteCard(event);
    } else if (event.target.classList.contains('card-picture')) {
      displayDirections(event);
    } else if (event.target.classList.contains('home')) {
      favButton.innerHTML = 'View Favorites';
      populateCards(cookbook.recipes);
    }
  }

  displayDirections(event) {
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
    let cost = recipeObject.calculateCost()
    let costInDollars = (cost / 100).toFixed(2)
    cardArea.classList.add('all');
    cardArea.innerHTML = 
      `<h3>${recipeObject.name}</h3>
      <p class='all-recipe-info'>
          <strong>It will cost: </strong>
          <span class='cost recipe-info'>$${costInDollars}</span>
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
    recipeObject.ingredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
      ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
      ${ingredient.name}</li></ul>
      `)
    })
    recipeObject.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', 
      `<li>${instruction.instruction}</li>`)
    })
  }

  getFavorites() {
    if (user.favoriteRecipes.length) {
      user.favoriteRecipes.forEach(recipe => {
        document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
      })
    } else return
  }

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
    getFavorites();
  }
}

export default DomUpdates;