
const Player = require('./Player.js');
const Deck = require('./Deck.js');
const Card = require('./Card.js');

class Game {
  constructor (playerOne, playerTwo){
    playerOne = new Player("Player 1", 0);
    playerTwo = new Player("Player 2", 0);
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.players = [playerOne, playerTwo];
    this.deck = new Deck();
  }

  deal = () => {
    this.deck.shuffle();
    let cardsToDeal = 26;
    let firstHand = [];
    let secondHand = [];
    while (cardsToDeal > 0){
      firstHand.push(this.deck.draw());
      secondHand.push(this.deck.draw());
      cardsToDeal = cardsToDeal - 2;
    }
    this.playerOne.setHand(firstHand);
    this.playerTwo.setHand(secondHand);
    console.log("Dealing cards...  players have been dealt 26 cards each.");

  }

  play = () => {
    console.log("Playing the game...");
        console.log("Player 1's hand:");
    for(let i=0; i< this.playerOne.hand.length; i++){
      console.log(this.playerOne.hand[i].describe());
    }
    console.log("Player 2's hand:");
    for(let i=0; i< this.playerTwo.hand.length; i++){
      console.log(this.playerTwo.hand[i].describe());
    }
    let round = 1;
    while (this.playerOne.hand.length > 0 && this.playerTwo.hand.length > 0){
      console.log(`Round ${round}`);
      let playerOneCard = this.playerOne.hand.shift();
      let playerTwoCard = this.playerTwo.hand.shift();
      console.log(`${this.playerOne.name} plays ${playerOneCard.describe()}`);
      console.log(`${this.playerTwo.getName()} plays ${playerTwoCard.describe()}`);
      if (playerOneCard.getValue() > playerTwoCard.getValue()){
        this.playerOne.incrementScore();
        console.log(`${this.playerOne.name} wins the round!`);
      } else if (playerOneCard.getValue() < playerTwoCard.getValue()){
        this.players[1].incrementScore();
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
