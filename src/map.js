'use strict';

window.ADVENTURE = 'ADVENTURE' in window ? ADVENTURE : {};

ADVENTURE.createMap = function () {
  const map = [];

  map.push('You sail the open seas.');
  map.push('You trek over hill and dale.');
  map.push('You enter a thick forest of Ash and Elm. Your men proceed to harvest wood to build ships with.');
  map.push('You step outside your log cabin and breathe in the fresh mountain air - a perfect day for exploring.');
  map.push('You encounter a storm and while the ships are thrown around, you and your crew escape unscathed.');
  map.push('You sail the open seas.');
  map.push('You trek over hill and dale.');
  map.push('You trek over hill and dale.');
  map.push('You sail the open seas.');
  map.push('You sail right into a massive whirlpool and end up losing two ships to Ægir');
  map.push('You sail the open seas.');
  map.push('You come across a large market in a crowded town. You and your men purchase much needed food and ale for the journey ahead.');
  map.push('You land on what is today called Canada.');
  map.push('You sail the open seas.');
  map.push('You sail the open seas.');
  map.push(`You visit the town's blacksmith and commission a bunch of sharp axes and strong shields`);

  return map;
};
