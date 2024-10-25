const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const B = Number(input); // 1100 <= B <= 9900
console.log((B * 10) / 11);