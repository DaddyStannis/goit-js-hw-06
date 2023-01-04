const INPUT = document.getElementById("validation-input");
const NUMBER_OF_SYMBOLS = INPUT.dataset["length"];

function checkNumberOfSymbols(e) {
  if (e.target.value.length != NUMBER_OF_SYMBOLS) {
    INPUT.classList.remove("valid");
    INPUT.classList.add("invalid");
  } else {
    INPUT.classList.remove("invalid");
    INPUT.classList.add("valid");
  }
}

INPUT.addEventListener("blur", checkNumberOfSymbols);
