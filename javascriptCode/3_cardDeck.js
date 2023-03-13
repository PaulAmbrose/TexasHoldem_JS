"use strict"

class CardDeck {
  constructor() {
    this.cards = [];
    this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let suit of this.suits) {
      for (let value of this.values) {
        this.cards.push(`${value} of ${suit}`);
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal(numCards) {
    if (numCards > this.cards.length) {
      throw new Error('Not enough cards in deck');
    }

    const cardsDealt = [];

    for (let i = 0; i < numCards; i++) {
      cardsDealt.push(this.cards.pop());
    }

    return cardsDealt;
  }
}
