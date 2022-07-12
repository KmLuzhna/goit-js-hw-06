const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach( element => {
  const listOfIngrediets = document.querySelector('#ingredients');
  const item = document.createElement("li");
  item.textContent = element;
  item.classList = "item";
  console.log(item);
  listOfIngrediets.append(item);
});