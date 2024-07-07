const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 경기의 수, 1 <= N <= 100_000
let X = 0;
let Y = 0;

for (let i = 1; i <= N; i++) {
  if (Math.abs(X - Y) >= 2) {
    break;
  }

  if (input[i].trim() === "D") {
    X++;
  } else {
    Y++;
  }
}

console.log(`${X}:${Y}`);
