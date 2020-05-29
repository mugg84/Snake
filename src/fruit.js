export default class Fruit {
  constructor(gameWidth, gameHeight) {
    this.side = 10;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.position = {
      x: Math.floor((Math.random() * gameWidth) / 10) * 10,
      y: Math.floor((Math.random() * gameHeight) / 10) * 10,
    };
  }

  newPosition() {
    this.position = {
      x: Math.floor((Math.random() * this.gameWidth) / 10) * 10,
      y: Math.floor((Math.random() * this.gameHeight) / 10) * 10,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#0f0";
    ctx.fillRect(this.position.x, this.position.y, this.side, this.side);
  }
}
