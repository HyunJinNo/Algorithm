const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const [A, B, C, D] = input.trim().split(" ").map(Number);

console.log(Math.abs(A + D - (B + C)));
