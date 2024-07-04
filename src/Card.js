class Card {
  constructor(name, suit, value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
  }
  describe(){
    return `${this.name} of ${this.suit}`;
  }

  getValue(){
    return this.value;
  }

  
}
module.exports = Card;