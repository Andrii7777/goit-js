const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt(`Введите пароль!`);

switch (message) {
  case null:
    alert("Отменено пользователем!");
    console.log("Отменено пользователем!");
    break;

  case ADMIN_PASSWORD:
    alert("Добро пожаловать!");
    console.log("Добро пожаловать!");
    break;

  default:
    alert("Доступ запрещен, неверный пароль!");
    console.log("Доступ запрещен, неверный пароль!");
}
