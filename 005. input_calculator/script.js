// Input Calculator
console.log(`Select an option:
1: Addition
2: Subtraction
3: Multiplication
4: Division`);

let number1 = prompt("Enter First Number: ");
let number2 = prompt("Enter Second Number: ");

number1 = parseInt(number1);
number2 = parseInt(number2);

let option = prompt("Choose an operation: ");
option = parseInt(option);

const number1Con = isNaN(number1);
const number2Con = isNaN(number2);
const optionCon = isNaN(option);

let result = null;

if (number1Con || number2Con || optionCon) {
  result = "Invalid Input";
} else {
  switch (option) {
    case 1:
      result = number1 + number2;
      break;
    case 2:
      result = number1 - number2;
      break;
    case 3:
      result = number1 * number2;
      break;
    case 4:
      result = number1 / number2;
      break;
    default:
      break;
  }
  if (result == null) {
    console.log("No Result");
  } else {
    console.log(`Result: ${result}`);
  }
}
