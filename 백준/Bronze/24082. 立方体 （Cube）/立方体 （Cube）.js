const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const X = Number(input);
console.log(Math.pow(X, 3));
