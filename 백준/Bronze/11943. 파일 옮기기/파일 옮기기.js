const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const [C, D] = input[1].split(" ").map(Number);

console.log(Math.min(A + D, B + C));
