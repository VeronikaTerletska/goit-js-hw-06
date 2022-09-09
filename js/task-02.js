const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const makeItemsList = items => {
  return items.map(items => {
    const itemsEl = document.createElement("li");
    itemsEl.classList.add("item");
    itemsEl.textContent = `${items}`;
    return itemsEl;
  });
};
const elements = makeItemsList(ingredients);
ingredientsList.append(...elements);
