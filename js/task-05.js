const NAME_INPUT = document.getElementById("name-input");
const NAME_OUTPUT = document.getElementById("name-output");

function printName(e) {
  let name = e.target.value.toLowerCase();
  let defaultName = "Anonymous";
  NAME_OUTPUT.textContent =
    name.length > 0 ? name[0].toUpperCase() + name.slice(1) : defaultName;
}

NAME_INPUT.addEventListener("input", printName);
