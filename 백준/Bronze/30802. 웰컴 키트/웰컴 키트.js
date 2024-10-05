const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 참가자의 수, 1 <= N <= 1_000_000_000
const arr = input[1].trim().split(" ").map(Number);
const [T, P] = input[2].trim().split(" ").map(Number);

console.log(
  arr.reduce((total, current) => (total += Math.ceil(current / T)), 0),
);
console.log(`${Math.floor(N / P)} ${N - Math.floor(N / P) * P}`);
