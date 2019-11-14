const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const login = prompt("Введите логин");

const isLoginValid = login => {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = (allLogins, login) => {
  if (allLogins.includes(login)) {
    console.log("Такой логин уже используется!");
    return false;
  } else {
    return true;
  }
};

const addLogin = (allLogins, login) => {
  if (isLoginValid(login)) {
    isLoginUnique(allLogins, login) &&
      allLogins.push(login) &&
      console.log("Логин успешно добавлен!");
  } else {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  }
};

addLogin(logins, login);

addLogin(logins, "Ajax"); 
addLogin(logins, "robotGoogles"); 
addLogin(logins, "Zod"); 
addLogin(logins, "jqueryisextremelyfast"); 