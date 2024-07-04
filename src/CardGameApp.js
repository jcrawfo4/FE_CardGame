// how to imoport Game class from Game.js
const Game = require('./Game');

class CardGameApp {
  constructor() {
    this.game = new Game();
  }

  start() {
    this.game.play();
  }
}
const app = new CardGameApp();
app.start();