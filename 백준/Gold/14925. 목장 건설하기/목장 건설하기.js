const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// M: 세로의 길이, 1 <= M <= 1_000
// N: 가로의 길이, 1 <= N <= 1_000
const [M, N] = input[0].split(" ").map(Number);
const arr = [];
const dp = Array.from({ length: M }, () => Array(N).fill(0));
let answer = 0;

for (let i = 1; i <= M; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if ((i === 0 || j === 0) && arr[i][j] === 0) {
      dp[i][j] = 1;
      answer = Math.max(answer, 1);
      continue;
    }

    if (arr[i][j] === 0) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      answer = Math.max(answer, dp[i][j]);
    }
  }
}

console.log(answer);