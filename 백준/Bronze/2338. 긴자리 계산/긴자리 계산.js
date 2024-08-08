const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const A = BigInt(input[0]);
const B = BigInt(input[1]);

console.log((A + B).toString());
console.log((A - B).toString());
console.log((A * B).toString());
