const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngrediets = document.querySelector('#ingredients');

const newlistOfIngrediets = ingredients.map(item => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = item;
  ingredientEl.classList.add("item");
  return ingredientEl;
});

listOfIngrediets.append(...newlistOfIngrediets);