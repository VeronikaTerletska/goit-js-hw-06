const categoriesList = document.querySelector("#categories");
const numberOfCategories = categoriesList.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const listItems = document.querySelectorAll(".item");
listItems.forEach(item => {
  const nameCategory = item.querySelector("h2");
  console.log(`Category: ${nameCategory.textContent}`);

  const listElements = item.querySelectorAll("li");
  console.log(`Elements: ${listElements.length}`);
});
