//sum_of_the_series_of_the_square_numbers

let number = parseInt(prompt("Enter the number of terms: "));

const showSeries = document.getElementById("showSeries");

let sum = 0;
let series = "";

for (let i = 1; i <= number; i++) {
  let square = i * i;
  sum += square; //sum = sum + square;
  series += square.toString(); // series = series + square.toString();
  if (i == number) {
    continue;
  }
  series += " + "; // series = series + " + ";
}

console.log(`${series} = ${sum}`);

showSeries.innerText = `${series} = ${sum}`;
