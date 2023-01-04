const BODY = document.querySelector("body");
const BUTTON = document.querySelector(".change-color");
const COLOR_VALUE = document.querySelector(".color");

function changeColor(e) {
  const randomColor = getRandomHexColor();
  COLOR_VALUE.textContent = randomColor;
  BODY.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

BUTTON.addEventListener("click", changeColor);
