export default class Fruit {
  constructor(gameWidth, gameHeight) {
    this.side = 20;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.position = {
      x: Math.floor((Math.random() * gameWidth) / this.side) * this.side,
      y: Math.floor((Math.random() * gameHeight) / this.side) * this.side,
    };
  }

  newPosition() {
    this.position = {
      x: Math.floor((Math.random() * this.gameWidth) / this.side) * this.side,
      y: Math.floor((Math.random() * this.gameHeight) / this.side) * this.side,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#0f0";
    ctx.fillRect(this.position.x, this.position.y, this.side, this.side);
  }
}
