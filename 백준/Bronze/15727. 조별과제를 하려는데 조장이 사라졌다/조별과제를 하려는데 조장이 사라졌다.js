const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const L = Number(input); // 1 <= L <= 1_000_000
console.log(Math.ceil(L / 5));
