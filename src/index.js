import "./styles.css";
import Snake from "./snake";
import InputHandler from "./input";
import Fruit from "./fruit";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 60);

let fruit = new Fruit(GAME_WIDTH, GAME_HEIGHT);
let snake = new Snake(GAME_WIDTH, GAME_HEIGHT, fruit);

new InputHandler(snake);

let lastTime = 0;

function gameLoop(timeStamp) {
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

    requestAnimationFrame(gameLoop);
  }, 200);
}

requestAnimationFrame(gameLoop);
