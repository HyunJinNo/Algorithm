const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const [n, m] = input
  .trim()
  .split(" ")
  .map((value) => BigInt(value));

console.log((n / m).toString());
console.log((n % m).toString());
