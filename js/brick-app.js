///////////////////// CONSTANTS /////////////////////////////////////



///////////////////// APP STATE (VARIABLES) /////////////////////////



///////////////////// CACHED ELEMENT REFERENCES /////////////////////



///////////////////// EVENT LISTENERS ///////////////////////////////



///////////////////// FUNCTIONS /////////////////////////////////////
const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");
const IMG = new Image();
IMG.src = "img/space.jpg";
const LIVES_IMG = new Image();
LIVES_IMG.src = "img/lives.png";

const PADDLE_WIDTH = 100;
const PADDLE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 20;
const BALL_RADIUS = 8;
let LIFE = 3;
let LEVEL = 0;
let GAME_OVER = false;
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
  dx: 3 * (Math.random() * 2 - 1),
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

function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
}

function ballWallColision() {
  if (ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0) {
    ball.dx = - ball.dx;
  }
  if (ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
  }
  if (ball.y + ball.radius > cvs.height) {
    LIFE--;
    resetBall();
  }
}

function resetBall() {
  ball.x = cvs.width/2;
  ball.y = paddle.y - BALL_RADIUS;
  ball.dx = 3 * (Math.random() * 2 - 1);
  ball.dy = -3;
}

function ballPaddleCollision() {
  if (ball.x < paddle.x + paddle.width && ball.x > paddle.x && paddle.y < paddle.y + paddle.height && ball.y > paddle.y) {
    let collidePoint = ball.x - (paddle.x + paddle.width/2);
    collidePoint = collidePoint / (paddle.width/2);
    let angle = collidePoint * Math.PI/3;
    ball.dx = - ball.speed * Math.sin(angle);
    ball.dy = - ball.speed * Math.cos(angle);
  }
}

const brick = {
  row : 3,
  column: 5,
  width: 55,
  height: 20,
  offSetLeft: 20,
  offSetTop: 20,
  marginTop: 40,
  fillColor: "white",
  strokeColor: "black"
}

let bricks = [];

function createBricks() {
  for (let r = 0; r < brick.row; r++) {
    bricks[r] = [];
    for (let c = 0; c < brick.column; c++) {
      bricks[r][c] = {
        x: c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
        y: r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
        status: true
      }
    }
  }
}

createBricks();

function drawBricks() {
  for (let r = 0; r < brick.row; r++) {
    for (let c = 0; c < brick.column; c++) {
      let b = bricks[r][c];
      if (b.status) {
        ctx.fillStyle = brick.fillColor;
        ctx.fillRect(b.x, b.y, brick.width, brick.height);
        ctx.strokeStyle = brick.strokeColor;
        ctx.strokeRect(b.x, b.y, brick.width, brick.height);
      }
    }
  }
}

function ballBrickCollision() {
  for (let r = 0; r < brick.row; r++) {
    for (let c = 0; c < brick.column; c++) {
      let b = bricks[r][c];
      if (b.status) {
        if (ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + brick.width && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + brick.height) {
          ball.dy = - ball.dy;
          b.status = false;
        }
      }
    }
  }
}

function showGameStats(text, textX, textY, img, imgX, imgY) {
  ctx.fillStyle = "#FFF";
  ctx.font = "50px";
  ctx.fillText(text, textX, textY);
  ctx.drawImage(img, imgX, imgY, width = 25, height = 25);
}

function draw() {
  drawPaddle();
  drawBall();
  drawBricks();
  showGameStats(LIFE, cvs.width - 25, 25, LIVES_IMG, cvs.width-55, 5);
}

function gameOver() {
  if (LIFE <= 0) {
    GAME_OVER = true;
  }
}

function levelUp() {
  let isLevelDone = true;
  for (let r = 0; r < brick.row; r++) {
    for (let c = 0; c < brick.column; c++) {
      isLevelDone = isLevelDone && ! bricks[r][c].status;
    }
  }
  if (isLevelDone) {
    createBricks();
    ball.speed += 0.5;
    resetBall();
    LEVEL++;
  }
}

function update() {
  movePaddle();
  moveBall();
  ballWallColision();
  ballPaddleCollision();
  ballBrickCollision();
  gameOver();
  levelUp();
}

function loop() {
  ctx.drawImage(IMG, 0, 0);
  draw();
  update();
  if (!GAME_OVER) {
    requestAnimationFrame(loop);
  }
}
loop();
