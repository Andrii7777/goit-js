const credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let numberOfDroids = prompt(`Какое количество дроидов вы хочет купить?`);

if (numberOfDroids === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = pricePerDroid * numberOfDroids;
  if (totalPrice <= credits)
    console.log(
      ` Вы купили ${numberOfDroids} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`
    );
  else {
    console.log("Недостаточно средств на счету.");
  }
}
