const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const S = Number(input[0]);
const F = Number(input[1]);

if (F < S) {
  console.log("flight");
} else {
  console.log("high speed rail");
}
