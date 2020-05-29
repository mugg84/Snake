export default class Snake {
  constructor(gameWidth, gameHeight, fruit) {
    this.side = 10;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.speed = 10;
    this.xSpeed = 0;
    this.ySpeed = 0;

    this.fruitsEaten = 0;
    this.tail = [];

    this.position = {
      x: Math.floor((gameWidth / 2 - this.side / 2) / 10) * 10,
      y: Math.floor((gameHeight / 2 - this.side / 2) / 10) * 10,
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

  eat(fruit) {
    if (
      this.position.x === fruit.position.x &&
      this.position.y === fruit.position.y
    ) {
      this.fruitsEaten++;
      return true;
    }
    return false;
  }

  draw(ctx) {
    ctx.fillStyle = "#f00";

    this.tail.map((_, index) => {
      return ctx.fillRect(
        this.tail[index].x,
        this.tail[index].y,
        this.side,
        this.side
      );
    });

    ctx.fillRect(this.position.x, this.position.y, this.side, this.side);
  }

  update() {
    this.tail.map((_, index) => (this.tail[index] = this.tail[index + 1]));

    this.tail[this.total - 1] = { x: this.position.x, y: this.position.y };

    this.position.x += this.xSpeed;
    this.position.y += this.ySpeed;

    if (this.position.x + this.side <= 0) {
      this.position.x = this.gameWidth;
    } else if (this.position.x > this.gameWidth) {
      this.position.x = 0;
    } else if (this.position.y + this.side <= 0) {
      this.position.y = this.gameHeight;
    } else if (this.position.y > this.gameHeight) {
      this.position.y = 0;
    }
  }
}