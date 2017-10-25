'use strict';

window.ADVENTURE = 'ADVENTURE' in window ? ADVENTURE : {};

ADVENTURE.game = (function (global) {
  const output = document.querySelector('#output'),
    input = document.querySelector('#input'),
    button = document.querySelector('button'),
    image = document.querySelector('img');

  // 0 2 1 3  WATER = 0
  // 0 0 1 1  LAND = 1
  // 1 0 0 2  ITEM = 2
  // 2 1 0 2  HOME = 3

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
  }
})(ADVENTURE);
