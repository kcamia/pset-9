///////////////////// CONSTANTS /////////////////////////////////////



///////////////////// APP STATE (VARIABLES) /////////////////////////



///////////////////// CACHED ELEMENT REFERENCES /////////////////////



///////////////////// EVENT LISTENERS ///////////////////////////////



///////////////////// FUNCTIONS /////////////////////////////////////
const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");

const PADDLE_WIDTH = 100;
const PADDLE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 20;

const paddle = {
  x : cvs.width/2 - PADDLE_WIDTH/2,
  y : cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
  width : PADDLE_WIDTH,
  height : PADDLE_HEIGHT,
  dx : 5
}

function drawPaddle() {
  ctx.fillStyle = "#74a2db";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

  ctx.strokeStyle = "#5f82ad";
  ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}


function draw() {
  drawPaddle();

}

function update() {

}

function loop() {
  draw();
  update();
  requestAnimationFrame(loop);
}
