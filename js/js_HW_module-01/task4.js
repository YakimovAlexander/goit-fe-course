const credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt(`Какое кол-во дроидов Вы хотели бы приобрести?`);
let message;

const totalPrice = credits / pricePerDroid;
const balance = credits - pricePerDroid * quantity;

if (quantity === null) {
  message = "Отменено пользователем!";
} else if (quantity > totalPrice) {
  message = "Недостаточно средств на счету!";
} else {
  message = `'Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.'`;
}

console.log(message);
