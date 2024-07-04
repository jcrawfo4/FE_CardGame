
const Player = require('./Player.js');
const Deck = require('./Deck.js');
const Card = require('./Card.js');

class Game {
  constructor (playerOne, playerTwo){
    playerOne = new Player();
    playerTwo = new Player();
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.players = [playerOne, playerTwo];
    this.deck = new Deck();
    this.winner = null;
  }

  deal = () => {
    this.deck.shuffle();
    cardsToDeal = 26;
    while (cardsToDeal > 0){
      this.players[0].hand.push(this.deck.draw());
      this.players[1].hand.push(this.deck.draw());
      cardsToDeal--;
    }
  }

  play = () => {
    let round = 1;
    while (this.players[0].hand.length > 0 && this.players[1].hand.length > 0){
      console.log(`Round ${round}`);
      let playerOneCard = this.players[0].hand.shift();
      let playerTwoCard = this.players[1].hand.shift();
      console.log(`${this.playerOne.getName()} plays ${playerOneCard.toString()}`);
      console.log(`${this.players[1].getName()} plays ${playerTwoCard.toString()}`);
      if (playerOneCard.getValue() > playerTwoCard.getRank()){
        this.players[0].getScore.incrementScore();
        console.log(`${this.players[0].getName()} wins the round!`);
      } else if (playerOneCard.getRank() < playerTwoCard.getRank()){
        this.players[1].getScore.incrementScore();
        console.log(`${this.players[1].getName()} wins the round!`);
      } else {
        console.log("It's a tie!");
      }
      round++;
    }
    this.winner = this.players[0].getScore() > this.players[1].getScore() ? this.players[0] : this.players[1];
    this.describeWinner(this.winner);
  }

  describeWinner (player){
    console.log(`${player.getName()} wins with ${player.getScore()} points!`);
  }
}
module.exports = Game;
