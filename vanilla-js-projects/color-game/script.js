let squaresQty = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const h1 = document.querySelector("h1");
const resetButton = document.getElementById("reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  reset();
  setUpModeButtons();
  setUpSquares();
  resetButton.addEventListener("click", reset);
}

function setUpModeButtons() {
  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      button.classList.add("selected");
      button.innerText === "EASY" ? (squaresQty = 3) : (squaresQty = 6);
      reset();
    });
  });
}

function setUpSquares() {
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      const clickedColor = square.style.backgroundColor;

      if (clickedColor === pickedColor) {
        message.innerText = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.innerText = "Play Again?";
      } else {
        square.style.backgroundColor = "#232323";
        message.innerText = "Try Again";
      }
    });
  });
}

function changeColors(color) {
  squares.forEach((square) => {
    square.style.backgroundColor = color;
  });
}

function reset() {
  colors = generateRandomColors(squaresQty);
  pickedColor = pickColor();
  colorDisplay.innerText = pickedColor;
  squares.forEach((square, index) => {
    if (colors[index]) {
      square.style.display = "block";
      square.style.backgroundColor = colors[index];
    } else {
      square.style.display = "none";
    }
  });
  h1.style.backgroundColor = "steelblue";
  resetButton.innerText = "New Colors";
  message.innerText = "";
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(qty) {
  let arr = [];
  for (var i = 0; i < qty; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
