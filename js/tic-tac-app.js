///////////////////// CONSTANTS /////////////////////////////////////

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

///////////////////// APP STATE (VARIABLES) /////////////////////////

let board;
let turn;
let win;
let x;
let xScore = 0;
let oScore = 0;
let tieScore = 0;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("xFirst").onclick = xGoesFirst;
document.getElementById("oFirst").onclick = oGoesFirst;

///////////////////// FUNCTIONS /////////////////////////////////////

function xGoesFirst() {
  if (turn === "") {
    turn = "X";
    document.getElementById("xFirst").style.backgroundColor = "green";
  }
  render();
}

function oGoesFirst() {
  if (turn === "") {
    turn = "O";
    document.getElementById("oFirst").style.backgroundColor = "red";
  }
  render();
}

function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  turn = "";

  win = null;

  document.getElementById("xFirst").style.backgroundColor = "white";
  document.getElementById("oFirst").style.backgroundColor = "white";

  render();
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;

  if (win === "T") {
    tieScore++;
    let x = document.getElementById("tied-score");
    x.innerHTML = tieScore;
  }

  if (win === "X") {
    xScore++;
    let y = document.getElementById("player1-score");
    y.innerHTML = xScore;
  }

  if (win === "O") {
    oScore++;
    let z = document.getElementById("player2-score");
    z.innerHTML = oScore;
  }
}

function takeTurn(e) {
  if (turn !== "") {
    if (!win) {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });

      if (board[index] === "") {
        board[index] = turn;
        turn = turn === "X" ? "O" : "X";
        win = getWinner();

        render();
      }
    }
  }
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
    }
  });

  return winner ? winner : board.includes("") ? null : "T";
  
}
