const Card = require('./Card');

class Deck {

  constructor() {
    this.cards = [];
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    suits.forEach(suit => {
      names.forEach((name, index) => {
        this.cards.push(new Card(name, suit, values[index]));
      });
    });
  }

  deckDescription() {
    return this.cards.map(card => card.describe());
  }

  draw () {
    return this.cards.shift();// draws the first card in the deck
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
}
module.exports = Deck;