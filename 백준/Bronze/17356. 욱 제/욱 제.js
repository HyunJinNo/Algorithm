const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const [A, B] = input.trim().split(" ").map(Number);
const M = (B - A) / 400;
console.log(1 / (1 + Math.pow(10, M)));
