"use strict"

class Player {
  constructor(name = "initialSetup", chips = 1000) {
    this.name = name;
    this.chips = chips;
    this.hand = [];
    this.folded = false;
    this.dealer = false;
    this.smallBlind = false;
    this.bigBlind = false;
  }

  toString() {
    return this.name;
  }

  receiveCard(card) {
    this.hand.push(card);
  }

  resetHand() {
    this.hand = [];
    this.folded = false;
  }

  fold() {
    this.folded = true;
  }

  bet(amount) {
    if (this.chips >= amount) {
      this.chips -= amount;
      return true;
    } else {
      return false;
    }
  }

  winChips(amount) {
    this.chips += amount;
  }
}

export {Player};
