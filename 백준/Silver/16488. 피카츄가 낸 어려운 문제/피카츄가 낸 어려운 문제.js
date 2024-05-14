const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

// 1 <= N, K <= 100_000
const [N, K] = input.split(" ").map(Number);
console.log(N * N * K);
