"use strict"

import * as gameSetupClass from "./javascriptCode/1_gameSetupClass.js";
import * as cardDeckClass from "./javascriptCode/3_cardDeckClass.js";

//Initial set up of game
let numberOfPlayers = 6;
let game = new gameSetupClass.game;
let testRandomRange = []
let errorCount = 0

for(let i = 0; i < 1000; i++){

      let testDealer = game.selectDealer();
      if (testDealer > (numberOfPlayers) || testDealer < 0){
          testRandomRange.push("ERROR");
      }else{
          testRandomRange.push(testDealer);
      }
    };

for(let i = 0; i < testRandomRange.length; ++i){

    if(testRandomRange[i] == "ERROR"){
      errorCount++;
    };
}

if(errorCount == 0){
  console.log("Test Passed")
}
if(errorCount != 0){
  console.log("Test Failed")
}
