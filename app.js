"use strict"

import * as gameSetupClass from "./javascriptCode/1_gameSetupClass.js";
import * as cardDeckClass from "./javascriptCode/3_cardDeckClass.js";

//Initial set up of game
let numberOfPlayers = 6;
let game = new gameSetupClass.game;

let testRandomRange = []

for(let i = 0; i < 50; i++){
      let testDealer = game.selectDealer();
      if (testDealer > (numberOfPlayers - 1)){
          testRandomRange.push(testDealer);
      }else{
          testRandomRange.push(testDealer);
      }
    }
    console.log(testRandomRange);
