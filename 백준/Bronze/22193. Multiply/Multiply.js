const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const A = BigInt(input[1]);
const B = BigInt(input[2]);

console.log((A * B).toString());
