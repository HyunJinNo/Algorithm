const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// L: 사람의 수, 1 <= L <= 10
// P: 넓이: 1 <= P <= 1_000
const [L, P] = input[0].trim().split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

console.log(
  arr
    .map((value) => value - L * P)
    .toString()
    .split(",")
    .join(" ")
);
