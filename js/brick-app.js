///////////////////// CONSTANTS /////////////////////////////////////



///////////////////// APP STATE (VARIABLES) /////////////////////////



///////////////////// CACHED ELEMENT REFERENCES /////////////////////



///////////////////// EVENT LISTENERS ///////////////////////////////



///////////////////// FUNCTIONS /////////////////////////////////////
const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");
const IMG = new Image();
IMG.src = "img/space.jpg";

const PADDLE_WIDTH = 100;
const PADDLE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 20;
const BALL_RADIUS = 8;
let leftArrow = false;
let rightArrow = false;

const paddle = {
  x : cvs.width/2 - PADDLE_WIDTH/2,
  y : cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
  width : PADDLE_WIDTH,
  height : PADDLE_HEIGHT,
  dx : 5
}

const ball = {
  x : cvs.width/2,
  y : paddle.y - BALL_RADIUS,
  radius : BALL_RADIUS,
  speed: 4,
  dx: 3,
  dy : -3
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
}

function drawPaddle() {
  ctx.fillStyle = "red";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

  ctx.strokeStyle = "#5f82ad";
  ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

document.addEventListener("keydown", function(event){
  if(event.keyCode == 37) {
    leftArrow = true;
  } else if (event.keyCode == 39) {
    rightArrow = true;
  }
})

document.addEventListener("keyup", function(event){
  if(event.keyCode == 37) {
    leftArrow = false;
  } else if (event.keyCode == 39) {
    rightArrow = false;
  }
})

function movePaddle() {
  if (rightArrow && paddle.x + paddle.width < cvs.width) {
    paddle.x += paddle.dx;
  } else if (leftArrow && paddle.x > 0) {
    paddle.x -= paddle.dx;
  }
}

function draw() {
  drawPaddle();
  drawBall();
}

function update() {
  movePaddle();
}

function loop() {
  ctx.drawImage(IMG, 0, 0);
  draw();
  update();
  requestAnimationFrame(loop);
}
loop();
