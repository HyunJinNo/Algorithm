const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const [A, B, C] = input.map(Number);

if (A + B + C <= 21) {
  console.log(1);
} else {
  console.log(0);
}
