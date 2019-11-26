const list = document.querySelectorAll(".item");

console.log(`В списке ${list.length} категории`);

list.forEach(item => {
  const category = item.querySelector("h2").textContent;
  const quantity = item.querySelectorAll("ul li").length;

  console.log(`
    Категория: ${category}
    Количество элементов: ${quantity}`);
});