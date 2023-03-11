"use strict"

import * as gameSetupClass from "./javascriptCode/1_gameSetupClass.js";
import * as playerClass from "./javascriptCode/2_playerClass.js";

/*
let testRandom = dealerAndBlinds.randomNumber(5);
console.log(testRandom);
let test = new playerClass.Player("paul", 500);
console.log(test);
*/

//Initial set up of game
let numberOfPlayers = 5;
let startingChips = 500;

//Initial set up of round
let game = new gameSetupClass.game;
game.selectDealer(numberOfPlayers);
game.selectSmallBlind(game.dealer);
game.selectBigBlind(game.smallBlind);

console.log(game);
console.log(game.dealer);
console.log(game.smallBlind);
console.log(game.bigBlind);
