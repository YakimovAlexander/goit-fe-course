const china = "Китай";
const chile = "Чили";
const australia = "Австралия";
const india = "Индия";
const jamaica = "Ямайка";

let price = 100;

const deliveryCountry = prompt("Введите страну доставки");
let message = null;

switch (deliveryCountry !== null && deliveryCountry.toLowerCase()) {
  case china.toLowerCase():
    message = `Доставка в ${china} будет стоить ${price} кредитов`;
    break;
  case chile.toLowerCase():
    price = 250;
    message = `Доставка в ${chile} будет стоить ${price} кредитов`;
    break;
  case australia.toLowerCase():
    price = 170;
    message = `Доставка в ${australia} будет стоить ${price} кредитов`;
    break;
  case india.toLowerCase():
    price = 80;
    message = `Доставка в ${india} будет стоить ${price} кредитов`;
    break;
  case jamaica.toLowerCase():
    price = 120;
    message = `Доставка в ${jamaica} будет стоить ${price} кредитов`;
    break;
  default:
    alert("В вашей стране доставка не доступна");
    break;
}

console.log(message);
