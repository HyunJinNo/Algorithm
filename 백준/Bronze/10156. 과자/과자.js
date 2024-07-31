const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

// K: 과자 한 개의 가격, 1 <= K <= 1_000
// N: 사려고 하는 과자의 개수, 1 <= N  <= 1_000
// M: 현재 동수가 가진 돈, 1 <= M <= 100_000
const [K, N, M] = input.trim().split(" ").map(Number);
console.log(Math.max(0, K * N - M));
