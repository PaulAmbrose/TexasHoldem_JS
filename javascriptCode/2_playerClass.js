"use strict"

class Player {
  constructor(name, chips = 1000) {
    this.name = name;
    this.chips = chips;
    this.hand = [];
    this.folded = false;
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

//Test
//let Paul = new Player("Paul", 500);
//Paul.receiveCard("Jack of Clubs");
//console.log(Paul.hand);
