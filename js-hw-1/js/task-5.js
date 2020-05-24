let delivery = prompt("Введите страну для доставки");

const country1 = "китай";
const country2 = "чили";
const country3 = "австралия";
const country4 = "индия";
const country5 = "ямайка";

let price;
let result;

switch ((delivery = delivery.toLowerCase())) {
  case "null":
    result = "Отменено пользователем!";
    break;

  case country1:
    price = 100;
    result = `Доставка в ${country1} будет стоить ${price} кредитов`;
    break;

  case country2:
    price = 250;
    result = `Доставка в ${country2} будет стоить ${price} кредитов`;
    break;

  case country3:
    price = 170;
    result = `Доставка в ${country3} будет стоить ${price} кредитов`;
    break;

  case country4:
    price = 80;
    result = `Доставка в ${country4} будет стоить ${price} кредитов`;
    break;

  case country5:
    price = 120;
    result = `Доставка в ${country5} будет стоить ${price} кредитов`;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
console.log(result);
