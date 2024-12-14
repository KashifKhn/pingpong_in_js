console.log("pingpong Game by KashifKhn");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;

const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 10;

let leftPaddleY = CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2;
let rightPaddleY = CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2;

ctx.fillStyle = "white";
ctx.fillRect(0, leftPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT);
ctx.fillRect(
  CANVAS_WIDTH - PADDLE_WIDTH,
  rightPaddleY,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
);
