let delivery = prompt("Введите страну для доставки");
let price1 = 100;
let price2 = 250;
let price3 = 170;
let price4 = 80;
let price5 = 120;

if (delivery === null) {
  console.log("Отменено пользователем!");
} else {
  switch ((delivery = delivery.toLowerCase())) {
    case "китай":
      console.log(`Доставка в ${delivery} будет стоить ${price1} кредитов`);
      break;

    case "чили":
      console.log(`Доставка в ${delivery} будет стоить ${price2} кредитов`);
      break;

    case "aвстралия":
      console.log(`Доставка в ${delivery} будет стоить ${price3} кредитов`);
      break;

    case "индия":
      console.log(`Доставка в ${delivery} будет стоить ${price4} кредитов`);
      break;

    case "ямайка":
      console.log(`Доставка в ${delivery} будет стоить ${price5} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
