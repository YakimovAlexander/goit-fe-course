const ADMIN_PASSWORD = "jqueryismyjam";
const result = prompt(`Введите пароль`);
let message = null;

if (result === null) {
  message = "Отменено пользователем!";
} else if (result === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
