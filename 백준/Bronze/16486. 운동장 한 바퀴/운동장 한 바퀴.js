const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const d1 = Number(input[0]);
const d2 = Number(input[1]);

console.log(d1 * 2 + 2 * Math.PI * d2);
