export default class Snake {
  constructor(gameWidth, gameHeight) {
    this.width = 10;
    this.height = 10;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.speed = 2;
    this.xSpeed = 0;
    this.ySpeed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight / 2 - this.height / 2,
    };
  }

  moveLeft() {
    this.ySpeed = 0;
    this.xSpeed = -this.speed;
  }

  moveRigth() {
    this.ySpeed = 0;
    this.xSpeed = this.speed;
  }

  moveUp() {
    this.xSpeed = 0;
    this.ySpeed = -this.speed;
  }

  moveDown() {
    this.xSpeed = 0;
    this.ySpeed = this.speed;
  }

  stop() {
    this.xSpeed = 0;
    this.ySpeed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#f00";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += this.xSpeed;
    this.position.y += this.ySpeed;

    if (this.position.x + this.width <= 0) {
      this.position.x = this.gameWidth;
    } else if (this.position.x > this.gameWidth) {
      this.position.x = 0;
    } else if (this.position.y + this.height <= 0) {
      this.position.y = this.gameHeight;
    } else if (this.position.y > this.gameHeight) {
      this.position.y = 0;
    }
  }
}
