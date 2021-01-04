let age = prompt("Granny's Age: ");

let printOnPage = document.getElementById("agePeriod");

if (age >= 80) {
  printOnPage.innerText = "Your granny is old enough!";
  console.log("Your granny is old!");
} else if (age >= 70 && age < 80) {
  printOnPage.innerText = "Your granny is old!";
  console.log("Your granny is old!");
} else if (age >= 50 && age < 70) {
  printOnPage.innerText = "Your granny is not so old!";
  console.log("Your granny is not so old!");
} else if (age >= 30 && age < 50) {
  printOnPage.innerText = "Your granny is still young!";
  console.log("Your granny is still young!");
} else if (age >= 19 && age < 30) {
  printOnPage.innerText = "Your granny is young!";
  console.log("Your granny is young!");
} else if (age >= 12 && age <= 18) {
  printOnPage.innerText = "Your granny is a teenager!";
  console.log("Your granny is a teenager!");
} else if (age >= 12 && age <= 18) {
  printOnPage.innerText = "Your granny is a teenager!";
  console.log("Your granny is a teenager!");
} else if (age >= 1 && age < 11) {
  printOnPage.innerText = "Your granny is a kid!";
  console.log("Your granny is a kid!");
} else {
  printOnPage.innerText = "Invalid Number!";
  console.log("Invalid Number!");
}
