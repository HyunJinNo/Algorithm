const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const n = Number(input); // 0 <= n <= 1_000

console.log(Math.floor(n / 10));
