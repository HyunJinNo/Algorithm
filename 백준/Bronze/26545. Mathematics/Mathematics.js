const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

console.log(
  input
    .map(Number)
    .slice(1)
    .reduce((total, current) => total + current, 0),
);
