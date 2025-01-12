const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const [a, b, c] = input.split(" ").map(Number);

console.log(Math.floor(((a + 1) * (b + 1)) / (c + 1) - 1));
