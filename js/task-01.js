const CATEGORIES = document.querySelectorAll(".item");

function loggingInfoToCategories() {
  console.log("Number of categories:", CATEGORIES.length);
  console.log("");

  for (let category of CATEGORIES) {
    const h2 = category.firstElementChild;
    const ul = category.lastElementChild;
    console.log("Category:", h2);
    console.log("Elements:", ul.childElementCount);
    console.log("");
  }
}

loggingInfoToCategories();
