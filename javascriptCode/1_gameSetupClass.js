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
      let random = Math.floor((Math.random() * this.numberOfPlayers) + 1);
        this.dealer = random;
  }

  selectSmallBlind(dealer){
      dealer++;
      //sort issue is number of players is exceeded
      this.smallBlind = dealer;
  }

  selectBigBlind(smallBlind){
      smallBlind++;
      this.bigBlind = smallBlind;
  }

  populatePlayers(numberOfPlayers){
      for(let i = 0; i < numberOfPlayers; i++){
        let createNextPlayer = new playerClass.Player();
        createNextPlayer.name = "Player " + (i+1);

        console.log(i);

        if(i == this.dealer){
          createNextPlayer.dealer = true;
        } else if (i == this.bigBlind) {
          createNextPlayer.bigBlind = true;
        } else if (i == this.smallBlind){
          createNextPlayer.smallBlind = true;
        } else{
        };

        this.playersArray[i] = createNextPlayer;
      }
  }

}

export {game};
