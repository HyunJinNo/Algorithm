const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const [a, b, c] = input
  .split(" ")
  .map(Number)
  .sort((num1, num2) => num1 - num2);

if (a === c) {
  console.log(2);
} else if (c * c === a * a + b * b) {
  console.log(1);
} else {
  console.log(0);
}
