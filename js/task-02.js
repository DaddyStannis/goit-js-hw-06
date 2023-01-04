const UL = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function printIngredients() {
  const elements = [];

  for (const i in ingredients) {
    elements.push(document.createElement("li"));
    elements[i].classList.add("item");
    elements[i].textContent = ingredients[i];
  }

  UL.append(...elements);
}

printIngredients();
