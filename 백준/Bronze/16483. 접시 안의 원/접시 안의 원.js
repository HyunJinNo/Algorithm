const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const T = Number(input); // 1 <= T <= 10_000
console.log(Math.round((T * T) / 4));
