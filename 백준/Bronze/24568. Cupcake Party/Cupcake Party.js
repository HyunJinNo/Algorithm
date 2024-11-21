const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const R = Number(input[0]);
const S = Number(input[1]);

console.log(R * 8 + S * 3 - 28);
