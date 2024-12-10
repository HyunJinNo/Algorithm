const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
console.log(
  180 * (n - 1) - arr.reduce((total, current) => total + current * 2, 0),
);
