const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const a = Number(input[0]);
const b = Number(input[1]);

if (a <= 3) {
  console.log(b - a);
} else {
  console.log(24 - a + b);
}
