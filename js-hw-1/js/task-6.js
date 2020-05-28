let total = 0;
let input;
do {
  input = prompt("Введите число.");

  const isNumber = Number.isNaN(+input);
  if (isNumber === true) {
    continue;
  }
  total += +input;
} while (input !== null);

console.log(`Общая сумма ${total}`);
