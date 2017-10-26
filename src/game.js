'use strict';

window.ADVENTURE = 'ADVENTURE' in window ? window.ADVENTURE : {};

ADVENTURE.game = (function (global) {
  const output = document.querySelector('#output'),
    input = document.querySelector('#input'),
    button = document.querySelector('button'),
    image = document.querySelector('img');

  // 0 2 1 3  WATER = 0
  // 5 0 1 1  LAND = 1
  // 0 5 0 2  ITEM = 2
  // 4 0 0 2  HOME = 3
  //          CANADA = 4
  //          SEA PERIL = 5

  const startLocation = 3,
    actions = ['north', 'east', 'south', 'west', 'take', 'use', 'drop'],
    items = ['wood', 'weapons', 'food'],
    itemLocations = [1, 15, 11],
    itemsKnown = ['wood', 'weapons', 'food'],
    satchel = [],
    map = global.createMap(),
    images = global.createImages(),
    blockedPathMessages = global.createBlockedPathMessages();

  let playerInput = '',
    gameMessage = '',
    action = '',
    mapLocation = startLocation,
    item = '';

  function clickHandler() {
    playGame();
  }

  function playGame() {

  }

  function render() {
    // Render location
    output.innerHTML = map[mapLocation];
    image.src = `assets/${images[mapLocation]}`;

    // Display an item if there is one in this location
    for (let i = 0; i < items.length; i++) {
      if (mapLocation === itemLocations[i]) output.innerHTML += `<br>You see a <strong>${items[i]}</strong> here.`;
    }

    // Display gmae message
    output.innerHTML += `<br><em>${gameMessage}</em>`;

    // Display the satchel contents
    if (satchel.length > 0) output.innerHTML += `<br>You are carrying: ${satchel.join(', ')}`;
  }

  function init() {
    // Display the player's location
    output.innerHTML = map[mapLocation];

    button.style.cursor = 'pointer';
    button.addEventListener('click', clickHandler, false);

    render();
  }

  return {
    init
  };
})(window.ADVENTURE);
