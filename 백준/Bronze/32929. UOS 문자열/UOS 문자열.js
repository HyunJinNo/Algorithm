const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const x = Number(input);

if (x % 3 === 1) {
  console.log("U");
} else if (x % 3 === 2) {
  console.log("O");
} else {
  console.log("S");
}
