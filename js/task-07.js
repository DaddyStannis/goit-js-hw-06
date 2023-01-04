const INPUT = document.getElementById("font-size-control");
const TEXT = document.getElementById("text");
changeFontSize();

function changeFontSize() {
  TEXT.style.fontSize = `${INPUT.value}px`;
}

INPUT.addEventListener("input", changeFontSize);
