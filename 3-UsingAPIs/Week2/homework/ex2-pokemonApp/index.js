'use strict';

const body = document.querySelector('body');

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('HTTP Error!');
  }
  return response.json();
}

function fetchAndPopulatePokemons(data) {
  const buttonElement = document.createElement('button');
  body.append(buttonElement);
  buttonElement.style.display = 'block';
  buttonElement.type = 'button';
  buttonElement.textContent = 'Get Pokemon!';
  buttonElement.addEventListener('click', createOptions);

  const selectElement = document.createElement('select');
  body.append(selectElement);
  selectElement.style.display = 'block';

  function createOptions() {
    const pokemons = data.results;
    pokemons.forEach((pokemon) => {
      const option = document.createElement('option');
      selectElement.append(option);
      option.value = pokemon.name;
      option.textContent = pokemon.name;
    });
  }
}

function fetchImage() {
  const selectElement = document.querySelector('select');
  selectElement.addEventListener('change', async (e) => {
    const oldImageElement = document.querySelector('img');
    if (oldImageElement) oldImageElement.remove();
    const imageElement = document.createElement('img');
    body.append(imageElement);

    const data2 = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${e.target.value}`
    );
    imageElement.src = data2.sprites.front_default;
  });
}

async function main() {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon');
    fetchAndPopulatePokemons(data);
    fetchImage();
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
