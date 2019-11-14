let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  let number = Number(input);
  numbers.push(number);
  console.log(numbers);

  if (!isNaN(number)) {
    total += number;
  } else alert("Было введено не число, попробуйте еще раз");
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);

console.log(total);
