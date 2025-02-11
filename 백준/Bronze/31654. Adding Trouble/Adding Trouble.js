const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const [A, B, C] = input.split(" ").map(Number);

if (A + B === C) {
  console.log("correct!");
} else {
  console.log("wrong!");
}
