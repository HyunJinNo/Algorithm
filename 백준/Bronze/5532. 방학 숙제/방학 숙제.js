const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const L = Number(input[0]); // 2 <= L <= 40
const A = Number(input[1]); // 1 <= A <= 1_000
const B = Number(input[2]); // 1 <= B <= 1_000
const C = Number(input[3]); // 1 <= C <= 100
const D = Number(input[4]); // 1 <= D <= 100
console.log(Math.max(L - Math.max(Math.ceil(A / C), Math.ceil(B / D))));
