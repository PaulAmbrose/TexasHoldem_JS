"use strict"

import * as gameSetupClass from "./javascriptCode/1_gameSetupClass.js";

/*
let testRandom = dealerAndBlinds.randomNumber(5);
console.log(testRandom);
let test = new playerClass.Player("paul", 500);
console.log(test);
*/

//Initial set up of game
let numberOfPlayers = 6;
let game = new gameSetupClass.game;
  game.selectDealer(numberOfPlayers);
  game.selectSmallBlind(game.dealer);
  game.selectBigBlind(game.smallBlind);
game.populatePlayers(numberOfPlayers);

//Initial set up of round
console.log(game);
