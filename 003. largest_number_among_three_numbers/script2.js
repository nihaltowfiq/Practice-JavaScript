// Largest Number Among Three Numbers

let a = 55;
let b = 5;
let c = 51;

if (a == b && a == c && b == c) {
  console.log("All numbers are same. Please enter three different number!");
} else if (a == b || a == c || b == c) {
  console.log("Two numbers are same. Please enter three different number!");
} else if (a >= b && a >= c) {
  console.log(`Greater Number is a: ${a}`);
} else if (b >= a && b >= c) {
  console.log(`Greater Number is b: ${b}`);
} else if (c >= a && c >= b) {
  console.log(`Greater Number is c: ${c}`);
}
