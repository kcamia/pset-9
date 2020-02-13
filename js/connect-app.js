///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////

let board;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;
const circles = Array.from(document.querySelectorAll("display"));
document.getElementById("display").onclick = takeTurn;

///////////////////// FUNCTIONS /////////////////////////////////////

funtion init() {
  board = [
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", ""
  ];

  turn = "R";

  render();
}

function render() {
  board.forEach(function(mark, index)) {
    circles[index].textContent = mark;
  });
}
