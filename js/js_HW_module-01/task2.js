const total = 100;
let ordered = 50;

let isEnough = ordered <= total;
let message = null;

if (isEnough) {
  message = '"Заказ оформлен, с вами свяжется менеджер"';
} else {
  message = '"На складе недостаточно товаров!"';
}
console.log(message);

ordered = 20;
isEnough = ordered <= total;
if (isEnough) {
  message = '"Заказ оформлен, с вами свяжется менеджер"';
} else {
  message = '"На складе недостаточно товаров!"';
}
console.log(message);

ordered = 80;
isEnough = ordered <= total;
if (isEnough) {
  message = '"Заказ оформлен, с вами свяжется менеджер"';
} else {
  message = '"На складе недостаточно товаров!"';
}
console.log(message);

ordered = 130;
isEnough = ordered <= total;
if (isEnough) {
  message = '"Заказ оформлен, с вами свяжется менеджер"';
} else {
  message = '"На складе недостаточно товаров!"';
}
console.log(message);
