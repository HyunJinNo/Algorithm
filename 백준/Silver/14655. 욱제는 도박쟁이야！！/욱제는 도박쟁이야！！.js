const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const sum = input[1]
  .split(" ")
  .map((value) => Math.abs(Number(value)))
  .reduce((total, current) => total + current, 0);

console.log(sum * 2);
