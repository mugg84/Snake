export default class InputHandler {
  constructor(snake) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          snake.moveLeft();
          break;
        case 39:
          snake.moveRigth();
          break;
        case 38:
          snake.moveUp();
          break;
        case 40:
          snake.moveDown();
      }
    });
  }
}
