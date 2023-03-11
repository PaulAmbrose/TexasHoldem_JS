"use strict"

class game{
  constructor(numberOfPlayers = 5) {
    this.numberOfPlayers = numberOfPlayers;
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
      this.smallBlind = dealer;
  }

  selectBigBlind(smallBlind){
      smallBlind++;
      this.bigBlind = smallBlind;
  }
}

export {game};
