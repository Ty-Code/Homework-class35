'use strict';

const body = document.querySelector('body');

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('HTTP Error!');
  }
  return response.json();
}

async function fetchAndPopulatePokemons() {
  try {
    const { results: pokemonList } = await fetchData(
      'https://pokeapi.co/api/v2/pokemon'
    );
    const selectElement = document.createElement('select');
    body.append(selectElement);
    selectElement.style.display = 'block';
    const placeholderOption = document.createElement('option');
    selectElement.append(placeholderOption);
    placeholderOption.value = '';
    placeholderOption.textContent = '--Please select--';

    let i = 1;
    pokemonList.forEach((pokemon) => {
      const option = document.createElement('option');
      selectElement.append(option);
      option.value = i++;
      option.textContent = pokemon.name;
    });
    selectElement.addEventListener('change', fetchImage);
  } catch (error) {
    console.log(error);
  }
}

async function fetchImage(e) {
  try {
    const {
      sprites: { front_default: image },
    } = await fetchData(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`);
    let imageElement = document.querySelector('img');
    if (!imageElement) {
      imageElement = document.createElement('img');
      body.append(imageElement);
    }
    imageElement.src = image;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const buttonElement = document.createElement('button');
  body.append(buttonElement);
  buttonElement.style.display = 'block';
  buttonElement.type = 'button';
  buttonElement.textContent = 'Get Pokemon!';
  buttonElement.addEventListener('click', fetchAndPopulatePokemons);
}

window.addEventListener('load', main);
