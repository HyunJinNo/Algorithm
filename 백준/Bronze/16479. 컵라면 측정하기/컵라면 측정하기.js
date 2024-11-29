const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const K = Number(input[0]);
const [D1, D2] = input[1].split(" ").map(Number);

console.log(K * K - Math.pow((D1 - D2) / 2, 2));
