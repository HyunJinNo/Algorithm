const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
console.log(input.map(Number).sort((a, b) => a - b)[1]);
