"use strict"
import * as playerClass from "./2_playerClass.js";

class game{
  constructor(numberOfPlayers = 6, minimumBet = 10) {
    this.numberOfPlayers = numberOfPlayers;
    this.minimumBet = minimumBet;
    this.playersArray = [];
    this.dealer = "";
    this.smallBlind = "";
    this.bigBlind = "";
  }

  selectDealer(){
      let random = Math.floor((Math.random() * this.numberOfPlayers));
        this.dealer = random;
  }

  selectBlinds(dealer){
      let endOfplayersList = this.numberOfPlayers;

      //if dealer is endOfplayersList-1:  smallblind = + 1; bigBlind = 0
      if(this.dealer  == (endOfplayersList - 1)){
        this.smallBlind = dealer + 1;
        this.bigBlind = 0;
      }
      //if dealer = endOfplayersList:  smallblind = 0; bigBlind = 1
        else if (this.dealer  == endOfplayersList){
        this.smallBlind = 0;
        this.bigBlind = 1;
      } else {
        //if endOfplayersList is not reached yet
        this.smallBlind = dealer + 1;
        this.bigBlind = dealer + 2;
      }
    };

  populatePlayers(numberOfPlayers){
      for(let i = 0; i < numberOfPlayers; i++)
        {
          let createNextPlayer = new playerClass.Player();
          createNextPlayer.name = "Player " + (i+1);
          this.playersArray[i] = createNextPlayer;
        }
      }
}

export {game};
