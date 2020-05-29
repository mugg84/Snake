import "./styles.css";
import Snake from "./snake";
import InputHandler from "./input";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 60);

let snake = new Snake(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(snake);

let lastTime = 0;

function gameLoop(timeStamp) {
	let deltaTime = timeStamp - lastTime;
	lastTime = timeStamp;

	ctx.clearRect(0, 0, 800, 600);
	snake.update(deltaTime);
	snake.draw(ctx);

	requestAnimationFrame(gameLoop);
}

gameLoop();
