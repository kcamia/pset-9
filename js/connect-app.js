///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////

let board;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;
const circles = Array.from(document.querySelectorAll("display"))

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

  render();
}

function render() {
  board.forEach(function(mark, index)) {
    circles[index].textContent = mark;
  });
}
