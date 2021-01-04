// Grading System

let number = prompt("Enter Your Mark: ");
number = parseInt(number);

const showGrade = document.getElementById("showGrade");

let grade;

if (number >= 80 && number <= 100) {
  grade = "A+";
} else if (number >= 70 && number < 80) {
  grade = "A";
} else if (number >= 60 && number < 70) {
  grade = "A-";
} else if (number >= 50 && number < 60) {
  grade = "B";
} else if (number >= 40 && number < 50) {
  grade = "C";
} else if (number >= 33 && number < 40) {
  grade = "D";
} else if (number >= 0 && number < 33) {
  grade = "F";
} else {
  grade = "Invalid Number!";
}

showGrade.innerText = "Your Grade: " + grade;
console.log(`Your Grade: ${grade}`);
