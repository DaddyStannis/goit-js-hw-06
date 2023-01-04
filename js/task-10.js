const CONTROLS = document.querySelector("#controls");
const BOXES = document.querySelector("#boxes");
const INPUT = CONTROLS.children[0];
const CREATE_BUTTON = CONTROLS.children[1];
const DESTROY_BUTTON = CONTROLS.children[2];
let prevWidth = 30;
let prevHeight = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; ++i) {
    const div = document.createElement("div");
    div.style.width = `${(prevWidth += 10)}px`;
    div.style.height = `${(prevHeight += 10)}px`;
    div.style.backgroundColor = getRandomHexColor();
    BOXES.appendChild(div);
  }
}

function destroyBoxes() {
  for (let i = BOXES.childElementCount - 1; i >= 0; --i) {
    BOXES.children[i].remove();
  }
  prevWidth = 30;
  prevHeight = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

CREATE_BUTTON.addEventListener("click", (e) => createBoxes(INPUT.value));
DESTROY_BUTTON.addEventListener("click", (e) => destroyBoxes());
