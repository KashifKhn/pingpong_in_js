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
let fps = 0;
let lastTimePerf = performance.now();

ctx.fillStyle = "white";
ctx.fillRect(0, leftPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT);
ctx.fillRect(
  CANVAS_WIDTH - PADDLE_WIDTH,
  rightPaddleY,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
);

document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);

function handleKeydown(event) {
  if (event.key === "ArrowUp") {
    paddleSpeed = -5;
  }
  if (event.key === "ArrowDown") {
    paddleSpeed = 5;
  }
}

function handleKeyup(event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    paddleSpeed = 0;
  }
}

function updateGameState() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let currentPerf = performance.now();
  let diff = currentPerf - lastTimePerf;
  lastTimePerf = currentPerf;

  fps = Math.round(1000 / diff);

  ctx.fillStyle = "white";
  leftPaddleY = Math.max(
    0,
    Math.min(leftPaddleY + paddleSpeed, CANVAS_HEIGHT - PADDLE_HEIGHT),
  );
  ctx.fillRect(0, leftPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT);
  ctx.font = "20px Arial";
  ctx.fillText(`FPS ${fps}`, 10, 20);
}

function gameLoop() {
  updateGameState();
  requestAnimationFrame(gameLoop);
}

gameLoop();
