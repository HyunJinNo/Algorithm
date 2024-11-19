const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const seconds = input
  .map(Number)
  .reduce((total, current) => total + current, 0);
console.log(Math.floor(seconds / 60));
console.log(seconds % 60);
