// Largest Number Among Three Numbers

let n1 = prompt("First Number: ");
let n2 = prompt("Second Number: ");
let n3 = prompt("Third Number: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

const showLargestNumber = document.getElementById("showLargestNumber");

if (n1 >= n2) {
  if (n1 >= n3) {
    showLargestNumber.innerText = `${n1} is the largest!`;
    console.log(`${n1} is the largest!`);
  } else {
    showLargestNumber.innerText = `${n3} is the largest!`;
    console.log(`${n3} is the largest!`);
  }
} else {
  if (n2 >= n3) {
    showLargestNumber.innerText = `${n2} is the largest!`;
    console.log(`${n2} is the largest!`);
  } else {
    showLargestNumber.innerText = `${n3} is the largest!`;
    console.log(`${n3} is the largest!`);
  }
}
