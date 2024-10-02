const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const P = input[1].trim().split(" ").map(Number);
let count = 0;
let initialHeight = P[0];
let before = 0;
let answer = 0;

P.forEach((value) => {
  if (value > before) {
    count++;
  } else {
    answer = Math.max(answer, before - initialHeight);
    initialHeight = value;
    count = 1;
  }
  before = value;
});

if (count >= 2) {
  answer = Math.max(answer, before - initialHeight);
}

console.log(answer);
