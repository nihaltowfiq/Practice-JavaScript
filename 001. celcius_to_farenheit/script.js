//Celsius to Farenheit

const temp = prompt("Enter Celsius Value: ");
const result = (temp * 9) / 5 + 32;
alert("Result: " + result + " Degree Farenheit");
document.getElementById(
  "taskResult"
).innerText = `Result: ${result} Degree Farenheit`;
