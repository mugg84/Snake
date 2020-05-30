import "./styles.css";
import Snake from "./snake";
import InputHandler from "./input";
import Fruit from "./fruit";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 780;
const GAME_HEIGHT = 580;
let isPlaying = true;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let fruit = new Fruit(GAME_WIDTH, GAME_HEIGHT);
let snake = new Snake(GAME_WIDTH, GAME_HEIGHT, fruit);

new InputHandler(snake);

function gameOver() {
  ctx.rect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx.fillStyle = "#000";
  ctx.fill();

  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("Game Over", GAME_WIDTH / 2, GAME_HEIGHT / 2);
  isPlaying = false;
}

let lastTime = 0;

function gameLoop(timeStamp) {
  if (isPlaying) {
    setTimeout(() => {
      let deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;

      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      fruit.draw(ctx);

      snake.update(deltaTime);
      snake.draw(ctx);

      if (snake.eat(fruit)) {
        fruit.newPosition();
      }

      if (snake.hit()) {
        gameOver();
      }

      requestAnimationFrame(gameLoop);
    }, 100);
  }
}

requestAnimationFrame(gameLoop);
