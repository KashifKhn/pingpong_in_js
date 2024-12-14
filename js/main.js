const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;

const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 10;

let leftPaddleY = CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2;
let rightPaddleY = CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2;
let paddleSpeed = 0;
let intervalId = null;

ctx.fillStyle = "white";
ctx.fillRect(0, leftPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT);
ctx.fillRect(
  CANVAS_WIDTH - PADDLE_WIDTH,
  rightPaddleY,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
);

document.addEventListener("keydown", handleKeydow);
document.addEventListener("keyup", handleKeyup);

function handleKeydow(event) {
  if (event.key === "ArrowUp") {
    paddleSpeed = -5;
  }
  if (event.key === "ArrowDown") {
    paddleSpeed = 5;
  }
}

function updateGameState() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.fillStyle = "white";
  leftPaddleY = Math.max(
    0,
    Math.min(leftPaddleY + paddleSpeed, CANVAS_HEIGHT - PADDLE_HEIGHT),
  );
  ctx.fillRect(0, leftPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT);
}

function handleKeyup(event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    paddleSpeed = 0;
  }
}

setInterval(updateGameState, 8);
