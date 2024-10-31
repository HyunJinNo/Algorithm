const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const month = Number(input[0]);
const day = Number(input[1]);

if (month === 1 || (month === 2 && day < 18)) {
  console.log("Before");
} else if (month === 2 && day === 18) {
  console.log("Special");
} else {
  console.log("After");
}
