const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const a = input[0]
  .trim()
  .split(" ")
  .map(Number)
  .reduce((total, current) => total + current, 0);
const b = input[1]
  .trim()
  .split(" ")
  .map(Number)
  .reduce((total, current) => total + current, 0);
console.log(Math.max(a, b));
