'use strict';

window.ADVENTURE = 'ADVENTURE' in window ? window.ADVENTURE : {};

ADVENTURE.game = (function (global) {
  const output = document.querySelector('#output'),
    input = document.querySelector('#input'),
    actionBtn = document.querySelector('#action'),
    northBtn = document.querySelector('#north'),
    eastBtn = document.querySelector('#east'),
    southBtn = document.querySelector('#south'),
    westBtn = document.querySelector('#west'),
    image = document.querySelector('img');

  const startLocation = 4,
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

  function actionClickHandler() {
    const playerAction = input.value.toLowerCase();
    playGame(playerAction);
  }

  function northClickHandler() {
    playGame('north');
  }

  function eastClickHandler() {
    playGame('east');
  }

  function southClickHandler() {
    playGame('south');
  }

  function westClickHandler() {
    playGame('west');
  }

  function playGame(input) {
    playerInput = input;

    gameMessage = '';
    action = '';

    // Work out player action
    for (let i = 0; i < actions.length; i++) {
      if (playerInput.indexOf(actions[i]) > -1) {
        action = actions[i];
        console.log(`Player's action: ${action}`);
        break;
      }
    }

    for (let i = 0; i < itemsKnown.length; i++) {
      if (playerInput.indexOf(itemsKnown[i]) > -1) {
        item = itemsKnown[i];
        console.log(`Player's item: ${item}`);
      }
    }

    // Choose correct action
    switch (action) {
      case 'north':
        if (mapLocation >= 5) mapLocation -= 5;
        else gameMessage = blockedPathMessages[mapLocation];
        break;
      case 'east':
        if (mapLocation % 5 !== 2) mapLocation += 1;
        else gameMessage = blockedPathMessages[mapLocation];
        break;
      case 'south':
        if (mapLocation < 10) mapLocation += 5;
        else gameMessage = blockedPathMessages[mapLocation];
        break;
      case 'west':
        if (mapLocation % 5 !== 0) mapLocation -= 1;
        else gameMessage = blockedPathMessages[mapLocation];
        break;
      case 'take':
        takeItem();
        break;
      case 'drop':
        dropItem();
        break;
      case 'use':
        useItem();
        break;
      default:
        gameMessage = `I don't understand that.`;
        break;
    }

    render();
  }

  function takeItem() {

  }

  function dropItem() {

  }

  function useItem() {

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

    actionBtn.style.cursor = 'pointer';
    actionBtn.addEventListener('click', actionClickHandler, false);
    northBtn.style.cursor = 'pointer';
    northBtn.addEventListener('click', northClickHandler, false);
    eastBtn.style.cursor = 'pointer';
    eastBtn.addEventListener('click', eastClickHandler, false);
    southBtn.style.cursor = 'pointer';
    southBtn.addEventListener('click', southClickHandler, false);
    westBtn.style.cursor = 'pointer';
    westBtn.addEventListener('click', westClickHandler, false);

    render();
  }

  return {
    init
  };
})(window.ADVENTURE);
