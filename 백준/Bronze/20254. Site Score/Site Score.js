const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const [a, b, c, d] = input.split(" ").map(Number);

console.log(a * 56 + b * 24 + c * 14 + d * 6);
