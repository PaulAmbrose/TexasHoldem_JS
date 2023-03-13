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

  selectBlinds(dealer){
      dealer++;

      if ((this.numberOfPlayers +1) == dealer){
        this.smallBlind = 0;
        this.bigBlind = 1;
      } else {
          this.smallBlind = dealer;
          this.bigBlind = (dealer +1)
      }
}

  populatePlayers(numberOfPlayers){
      for(let i = 0; i < numberOfPlayers; i++){
        let createNextPlayer = new playerClass.Player();
        createNextPlayer.name = "Player " + (i+1);

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
