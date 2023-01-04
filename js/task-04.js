const INCREASER = document.querySelector('[data-action="increment"]');
const DECREASER = document.querySelector('[data-action="decrement"]');
const VALUE = document.getElementById("value");
let counterValue = 0;

function increaseValue(e) {
  VALUE.textContent = ++counterValue;
}

function decreaseValue(e) {
  VALUE.textContent = --counterValue;
}

INCREASER.addEventListener("click", increaseValue);
DECREASER.addEventListener("click", decreaseValue);
