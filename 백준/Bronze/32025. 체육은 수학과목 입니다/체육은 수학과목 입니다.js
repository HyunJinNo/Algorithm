const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const H = Number(input[0]); // 5 <= H <= 1_000
const W = Number(input[1]); // 5 <= W <= 1_000

console.log(parseInt((Math.min(H, W) / 2) * 100));
