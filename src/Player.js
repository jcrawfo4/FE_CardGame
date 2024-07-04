const Card = require("./Card.js");

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = 0;
    this.hand = [];
  }

  setName = (name) => {
    this.name = name;
  };
  getName = () => {
    return this.name;
  };

  setScore = (score) => {
    this.score = score;
  };
  getScore = () => {
    return this.score;
  };

  incrementScore = () => {
    this.score += 1;
  };

  setHand = (hand) => {
    this.hand = hand;
  };
  getHand = () => {
    return this.hand;
  };
}
module.exports = Player;