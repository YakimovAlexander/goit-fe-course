let input = null;
let total = 0;

do {
  input = prompt("Введите число");
  console.log(input);
  let num = Number(input);
  total += num;
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);

console.log(total);
