///////////////////// CONSTANTS /////////////////////////////////////

const miniWinningConditions1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

const miniWinningConditions2 = [
  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19],
  [11, 14, 17],
  [12, 15, 18],
  [13, 16, 19],
  [11, 15, 19],
  [13, 15, 17]
]

const miniWinningConditions3 = [
  [21, 22, 23],
  [24, 25, 26],
  [27, 28, 29],
  [21, 24, 27],
  [22, 25, 28],
  [23, 26, 29],
  [21, 25, 29],
  [23, 25, 27]
]

const miniWinningConditions4 = [
  [31, 32, 33],
  [34, 35, 36],
  [37, 38, 39],
  [31, 34, 37],
  [32, 35, 38],
  [33, 36, 39],
  [31, 35, 39],
  [33, 35, 37]
]

const miniWinningConditions5 = [
  [41, 42, 43],
  [44, 45, 46],
  [47, 48, 49],
  [41, 44, 47],
  [42, 45, 48],
  [43, 46, 49],
  [41, 45, 49],
  [43, 45, 47]
]

const miniWinningConditions6 = [
  [51, 52, 53],
  [54, 55, 56],
  [57, 58, 59],
  [51, 54, 57],
  [52, 55, 58],
  [53, 56, 59],
  [51, 55, 59],
  [53, 55, 57]
]

const miniWinningConditions7 = [
  [61, 62, 63],
  [64, 65, 66],
  [67, 68, 69],
  [61, 64, 67],
  [62, 65, 68],
  [63, 66, 69],
  [61, 65, 69],
  [63, 65, 67]
]

const miniWinningConditions8 = [
  [71, 72, 73],
  [74, 75, 76],
  [77, 78, 79],
  [71, 74, 77],
  [72, 75, 78],
  [73, 76, 79],
  [71, 75, 79],
  [73, 75, 77]
]

const miniWinningConditions9 = [
  [81, 82, 83],
  [84, 85, 86],
  [87, 88, 89],
  [81, 84, 87],
  [82, 85, 88],
  [83, 86, 89],
  [81, 85, 89],
  [83, 85, 87]
]

///////////////////// APP STATE (VARIABLES) /////////////////////////

let board;
let turn;
let win;
let draw;
let overallWin;
let tieCheck;
let localWin1;
let localWin2;
let localWin3;
let localWin4;
let localWin5;
let localWin6;
let localWin7;
let localWin8;
let localWin9;
let localWinner1;
let localWinner2;
let localWinner3;
let localWinner4;
let localWinner5;
let localWinner6;
let localWinner7;
let localWinner8;
let localWinner9;
let nextMoveRestriction = 0;
let lastMoveRestriction = 20;
let scoreX = 0;
let scoreO = 0;
let tieScore = 0;
let maxCapacity = false;
let counter = 0;

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
  board = [];
  for (x = 0; x < 90; x++) {
    if (x % 10 === 0) {
      squares[x].id = "";
    } else {
      squares[x].textContent = "";
    }
  }
  turn = "";

  message.textContent =  win ? `${overallWin} wins!` : `Turn: ${turn}`;
  document.getElementById("xFirst").style.backgroundColor = "white";
  document.getElementById("oFirst").style.backgroundColor = "white";

  render();
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });

  if (draw === true) {
    message.textContent = "It's a tie!";
  } else {
    message.textContent = win ? `${overallWin} wins!` : `Turn: ${turn}`;
  }

  let x = document.getElementById("tied-score");
  x.innerHTML = tieScore;
  let y = document.getElementById("player1-score");
  y.innerHTML = scoreX;
  let z = document.getElementById("player2-score");
  z.innerHTML = scoreO;
}

function takeTurn(e) {
  if (!overallWin) {

    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (maxCapacity === true ) {
      nextMoveRestriction = 0;
    }

    if (nextMoveRestriction === 1) {
      if(Math.floor(index / 10) !== 0){
        squares[index] = "";
        turn = turn === "X" ? "O" : "X";
      }
    } else if (nextMoveRestriction === 2) {
      if(Math.floor(index / 10) !== 1){
        squares[index] = "";
        turn = turn === "X" ? "O" : "X";
      }
    } else if (nextMoveRestriction === 3) {
      if(Math.floor(index / 10) !== 2){
        squares[index] = "";
        turn = turn === "X" ? "O" : "X";
      }
    } else if (nextMoveRestriction === 4) {
      if(Math.floor(index / 10) !== 3){
        squares[index] = "";
        turn = turn === "X" ? "O" : "X";
      }
    } else if (nextMoveRestriction === 5) {
      if(Math.floor(index / 10) !== 4){
        squares[index] = "";
        turn = turn === "X" ? "O" : "X";
      }
    } else if (nextMoveRestriction === 6) {
      if(Math.floor(index / 10) !== 5){
        squares[index] = "";
        turn = turn === "X" ? "O" : "X";
      }
    } else if (nextMoveRestriction === 7) {
      if(Math.floor(index / 10) !== 6){
        squares[index] = "";
        turn = turn === "X" ? "O" : "X";
      }
    } else if (nextMoveRestriction === 8) {
      if(Math.floor(index / 10) !== 7){
        squares[index] = "";
        turn = turn === "X" ? "O" : "X";
      }
    } else if (nextMoveRestriction === 9) {
      if(Math.floor(index / 10) !== 8){
        squares[index] = "";
        turn = turn === "X" ? "O" : "X";
      }
    } else {
    }

    if (squares[index].textContent !== "X" && squares[index].textContent !== "O") {
      board[index] = turn;

      if(localWin1 === "X" || localWin1 === "O" || localWin1 === "T") {
      } else {
        localWin1 = getLocalWinner1(e);
      }

      if(localWin2 === "X" || localWin2 === "O" || localWin2 === "T") {
      } else {
        localWin2 = getLocalWinner2(e);
      }

      if(localWin3 === "X" || localWin3 === "O" || localWin3 === "T") {
      } else {
        localWin3 = getLocalWinner3(e);
      }

      if(localWin4 === "X" || localWin4 === "O" || localWin4 === "T") {
      } else {
        localWin4 = getLocalWinner4(e);
      }

      if(localWin5 === "X" || localWin5 === "O" || localWin5 === "T") {
      } else {
        localWin5 = getLocalWinner5(e);
      }

      if(localWin6 === "X" || localWin6 === "O" || localWin6 === "T") {
      } else {
        localWin6 = getLocalWinner6(e);
      }

      if(localWin7 === "X" || localWin7 === "O" || localWin7 === "T") {
      } else {
        localWin7 = getLocalWinner7(e);
      }

      if(localWin8 === "X" || localWin8 === "O" || localWin8 === "T") {
      } else {
        localWin8 = getLocalWinner8(e);
      }

      if(localWin9 === "X" || localWin9 === "O" || localWin9 === "T") {
      } else {
        localWin9 = getLocalWinner9(e);
      }

      render();
      overallWin = getOverallWinner();
      tieCheck = checkTie();

      turn = turn === "X" ? "O" : "X";
      restrictedTurn(e);
    }

    render();
  }
}

function getLocalWinner1(e){
  let winner = false;

  miniWinningConditions1.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {

    winner = board[condition[0]];
    localWin1 = true;
    localWinner1 = winner;
    console.log("LOCAL WINNER 1");
  }
  });

  if (
    ((board[1] === "X" || board[1] === "O") &&
    (board[2] === "X" || board[2] === "O") &&
    (board[3] === "X" || board[3] === "O") &&
    (board[4] === "X" || board[4] === "O") &&
    (board[5] === "X" || board[5] === "O") &&
    (board[6] === "X" || board[6] === "O") &&
    (board[7] === "X" || board[7] === "O") &&
    (board[8] === "X" || board[8] === "O") &&
    (board[9] === "X" || board[9] === "O")) && !localWin1
  ) {
    console.log("LOCAL BOARD 1 is TIE");
    localWinner1 = "T";
  }
  return localWinner1;
}

function getLocalWinner2(e){
  let winner = false;

  miniWinningConditions2.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {

    winner = board[condition[0]];
    localWin2 = true;
    localWinner2 = winner;
    console.log("LOCAL WINNER 2");
    }
  });

    if (
      ((board[11] === "X" || board[11] === "O") &&
      (board[12] === "X" || board[12] === "O") &&
      (board[13] === "X" || board[13] === "O") &&
      (board[14] === "X" || board[14] === "O") &&
      (board[15] === "X" || board[15] === "O") &&
      (board[16] === "X" || board[16] === "O") &&
      (board[17] === "X" || board[17] === "O") &&
      (board[18] === "X" || board[18] === "O") &&
      (board[19] === "X" || board[19] === "O")) && !localWin2
    ) {
      console.log("LOCAL BOARD 2 is TIE");
      localWinner2 = "T";
    }

  return localWinner2;
}

function getLocalWinner3(e){
  let winner = false;

  miniWinningConditions3.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {

    winner = board[condition[0]];
    localWin3 = true;
    localWinner3 = winner;
    console.log("LOCAL WINNER 3");
    }
  });

    if (
      ((board[21] === "X" || board[21] === "O") &&
      (board[22] === "X" || board[22] === "O") &&
      (board[23] === "X" || board[23] === "O") &&
      (board[24] === "X" || board[24] === "O") &&
      (board[25] === "X" || board[25] === "O") &&
      (board[26] === "X" || board[26] === "O") &&
      (board[27] === "X" || board[27] === "O") &&
      (board[28] === "X" || board[28] === "O") &&
      (board[29] === "X" || board[29] === "O")) && !localWin3
    ) {
      console.log("LOCAL BOARD 3 is TIE");
      localWinner3 = "T";
    }
    return localWinner3;
}

function getLocalWinner4(e){
  let winner = false;

  miniWinningConditions4.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {

    winner = board[condition[0]];
    localWin4 = true;
    localWinner4 = winner;
    console.log("LOCAL WINNER 4");
    }
  });

    if (
      ((board[31] === "X" || board[31] === "O") &&
      (board[32] === "X" || board[32] === "O") &&
      (board[33] === "X" || board[33] === "O") &&
      (board[34] === "X" || board[34] === "O") &&
      (board[35] === "X" || board[35] === "O") &&
      (board[36] === "X" || board[36] === "O") &&
      (board[37] === "X" || board[37] === "O") &&
      (board[38] === "X" || board[38] === "O") &&
      (board[39] === "X" || board[39] === "O")) && !localWin4
    ) {
      console.log("LOCAL BOARD 4 is TIE");
      localWinner4 = "T";
    }
    return localWinner4;
}

function getLocalWinner5(e){
  let winner = false;

  miniWinningConditions5.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {

    winner = board[condition[0]];
    localWin5 = true;
    localWinner5 = winner;
    console.log("LOCAL WINNER 5");
    }
  });

  if (
    ((board[41] === "X" || board[41] === "O") &&
    (board[42] === "X" || board[42] === "O") &&
    (board[43] === "X" || board[43] === "O") &&
    (board[44] === "X" || board[44] === "O") &&
    (board[45] === "X" || board[45] === "O") &&
    (board[46] === "X" || board[46] === "O") &&
    (board[47] === "X" || board[47] === "O") &&
    (board[48] === "X" || board[48] === "O") &&
    (board[49] === "X" || board[49] === "O")) && !localWin5
  ) {
    console.log("LOCAL BOARD 5 is TIE");
    localWinner5 = "T";
  }
  return localWinner5;
}

function getLocalWinner6(e){
  let winner = false;

  miniWinningConditions6.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {

    winner = board[condition[0]];
    localWin6 = true;
    localWinner6 = winner;
    console.log("LOCAL WINNER 6");
    }
  });

  if (
    ((board[51] === "X" || board[51] === "O") &&
    (board[52] === "X" || board[52] === "O") &&
    (board[53] === "X" || board[53] === "O") &&
    (board[54] === "X" || board[54] === "O") &&
    (board[55] === "X" || board[55] === "O") &&
    (board[56] === "X" || board[56] === "O") &&
    (board[57] === "X" || board[57] === "O") &&
    (board[58] === "X" || board[58] === "O") &&
    (board[59] === "X" || board[59] === "O")) && !localWin6
  ) {
    console.log("LOCAL BOARD 6 is TIE");
    localWinner6 = "T";
  }
  return localWinner6;
}

function getLocalWinner7(e){
  let winner = false;

  miniWinningConditions7.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {

    winner = board[condition[0]];
    localWin7 = true;
    localWinner7 = winner;
    console.log("LOCAL WINNER 7");
    }
  });

  if (
    ((board[61] === "X" || board[61] === "O") &&
    (board[62] === "X" || board[62] === "O") &&
    (board[63] === "X" || board[63] === "O") &&
    (board[64] === "X" || board[64] === "O") &&
    (board[65] === "X" || board[65] === "O") &&
    (board[66] === "X" || board[66] === "O") &&
    (board[67] === "X" || board[67] === "O") &&
    (board[68] === "X" || board[68] === "O") &&
    (board[69] === "X" || board[69] === "O")) && !localWin7
  ) {
    console.log("LOCAL BOARD 7 is TIE");
    localWinner7 = "T";
  }
  return localWinner7;
}

function getLocalWinner8(e){
  let winner = false;

  miniWinningConditions8.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {

    winner = board[condition[0]];
    localWin8 = true;
    localWinner8 = winner;
    console.log("LOCAL WINNER 8");
    }
  });

  if (
    ((board[71] === "X" || board[71] === "O") &&
    (board[72] === "X" || board[72] === "O") &&
    (board[73] === "X" || board[73] === "O") &&
    (board[74] === "X" || board[74] === "O") &&
    (board[75] === "X" || board[75] === "O") &&
    (board[76] === "X" || board[76] === "O") &&
    (board[77] === "X" || board[77] === "O") &&
    (board[78] === "X" || board[78] === "O") &&
    (board[79] === "X" || board[79] === "O")) && !localWin8
  ) {
    console.log("LOCAL BOARD 8 is TIE");
    localWinner8 = "T";
  }
  return localWinner8;
}

function getLocalWinner9(e){
  let winner = false;

  miniWinningConditions9.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {

    winner = board[condition[0]];
    localWin9 = true;
    localWinner9 = winner;
    console.log("LOCAL WINNER 9");
    }
  });

  if (
    ((board[81] === "X" || board[81] === "O") &&
    (board[82] === "X" || board[82] === "O") &&
    (board[83] === "X" || board[83] === "O") &&
    (board[84] === "X" || board[84] === "O") &&
    (board[85] === "X" || board[85] === "O") &&
    (board[86] === "X" || board[86] === "O") &&
    (board[87] === "X" || board[87] === "O") &&
    (board[88] === "X" || board[88] === "O") &&
    (board[89] === "X" || board[89] === "O")) && !localWin9
  ) {
    console.log("LOCAL BOARD 9 is TIE");
    localWinner9 = "T";
  }
  return localWinner9;
}

function getOverallWinner(){
  let winner = false;

  if (
    (localWin1 === "X" && localWin2 === "X" && localWin3 === "X") ||
    (localWin4 === "X" && localWin5 === "X" && localWin6 === "X") ||
    (localWin7 === "X" && localWin8 === "X" && localWin9 === "X") ||
    (localWin1 === "X" && localWin4 === "X" && localWin7 === "X") ||
    (localWin2 === "X" && localWin5 === "X" && localWin8 === "X") ||
    (localWin5 === "X" && localWin6 === "X" && localWin9 === "X") ||
    (localWin1 === "X" && localWin5 === "X" && localWin9 === "X") ||
    (localWin3 === "X" && localWin5 === "X" && localWin7 === "X")
  ) {
    overallWin = "X";
    console.log(overallWin + " is the ultimate winner!");
    win = true;
    winner = "X";
    scoreX++;
  } else if (
    (localWin1 === "O" && localWin2 === "O" && localWin3 === "O") ||
    (localWin4 === "O" && localWin5 === "O" && localWin6 === "O") ||
    (localWin7 === "O" && localWin8 === "O" && localWin9 === "O") ||
    (localWin1 === "O" && localWin4 === "O" && localWin7 === "O") ||
    (localWin2 === "O" && localWin5 === "O" && localWin8 === "O") ||
    (localWin5 === "O" && localWin6 === "O" && localWin9 === "O") ||
    (localWin1 === "O" && localWin5 === "O" && localWin9 === "O") ||
    (localWin3 === "O" && localWin5 === "O" && localWin7 === "O")
  ) {
    overallWin = "O";
    console.log(overallWin + " is the ultimate winner!");
    win = true;
    winner = "O";
    scoreO++;
  } else {
  }

  return winner;
}

function checkTie(){
  if (
    (localWin1 === "X" || localWin1 === "O" || localWin1 === "T") &&
    (localWin2 === "X" || localWin2 === "O" || localWin2 === "T") &&
    (localWin3 === "X" || localWin3 === "O" || localWin3 === "T") &&
    (localWin4 === "X" || localWin4 === "O" || localWin4 === "T") &&
    (localWin5 === "X" || localWin5 === "O" || localWin5 === "T") &&
    (localWin6 === "X" || localWin6 === "O" || localWin6 === "T") &&
    (localWin7 === "X" || localWin7 === "O" || localWin7 === "T") &&
    (localWin8 === "X" || localWin8 === "O" || localWin8 === "T") &&
    (localWin9 === "X" || localWin9 === "O" || localWin9 === "T")
    && !overallWin
  ) {
    console.log("There is an OVERALL TIE");
    win = false;
    winner = "T";
    tieScore++;
    draw = true;
  }

  return draw;
}

function restrictedTurn(e){
  maxCapacity = false;
  counter = 0;

  let index = squares.findIndex(function(square) {
    return square === e.target;
  });

  if (index % 10 === 1) {
    squares[0].id = "highlighted";
    nextMoveRestriction = 1;
  } else if (index % 10 === 2){
    squares[10].id = "highlighted";
    nextMoveRestriction = 2;
  } else if (index % 10 === 3){
    squares[20].id = "highlighted";
    nextMoveRestriction = 3;
  } else if (index % 10 === 4){
    squares[30].id = "highlighted";
    nextMoveRestriction = 4;
  } else if (index % 10 === 5){
    squares[40].id = "highlighted";
    nextMoveRestriction = 5;
  } else if (index % 10 === 6){
    squares[50].id = "highlighted";
    nextMoveRestriction = 6;
  } else if (index % 10 === 7){
    squares[60].id = "highlighted";
    nextMoveRestriction = 7;
  } else if (index % 10 === 8){
    squares[70].id = "highlighted";
    nextMoveRestriction = 8;
  } else if (index % 10 === 9){
    squares[80].id = "highlighted";
    nextMoveRestriction = 9;
  } else {
  }

  if (lastMoveRestriction !== nextMoveRestriction) {
    let lastBox = Number(lastMoveRestriction);
    let lastIndex = (lastBox - 1) * 10;
    if (lastIndex < 100) {
      squares[lastIndex].id = "";
    }
  }

  let nextMoveIndexes = (Number(nextMoveRestriction) - 1) * 10;
  for (y = nextMoveIndexes; y < nextMoveIndexes + 10; y++) {
    if (squares[y].textContent === "X" || squares[y].textContent === "O"){
      counter++;
    }
  }

  if (counter === 9) {
    maxCapacity = true;
  }

  lastMoveRestriction = nextMoveRestriction;
}
