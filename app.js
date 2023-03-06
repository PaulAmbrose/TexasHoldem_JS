"use strict"

let numberOfPlayers = 5;
let dealer = randomNumber(numberOfPlayers);
let smallBlind = calcBlind(numberOfPlayers, dealer);
let bigBlind = calcBlind(numberOfPlayers, smallBlind);

function randomNumber(numberOfPlayers){
    let random = Math.floor((Math.random() * numberOfPlayers) + 1)
  return random;
}

function calcBlind(numberOfPlayers, dealerOrSmallBlind){
    if (dealerOrSmallBlind + 1 > numberOfPlayers){
      let xBlind = 0;
        return xBlind;
    } else {
      let xBlind = dealerOrSmallBlind + 1;
        return xBlind;
    }
}

console.log("The number of players are " + (numberOfPlayers + 1));
console.log("The dealer is " + dealer);
console.log("The small blind is " + smallBlind);
console.log("The big blind is " + bigBlind)
