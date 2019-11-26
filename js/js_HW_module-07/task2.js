const ingredientsUl = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

ingredients.forEach(elem => {
  const ingredientsLi = document.createElement("li");
  ingredientsLi.textContent = elem;
  fragment.append(ingredientsLi);
});
ingredientsUl.append(fragment);