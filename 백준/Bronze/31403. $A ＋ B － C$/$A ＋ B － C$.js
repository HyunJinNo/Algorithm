const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const A = Number(input[0].trim());
const B = Number(input[1].trim());
const C = Number(input[2].trim());

console.log(A + B - C);
console.log(Number(`${A}${B}`) - C);
