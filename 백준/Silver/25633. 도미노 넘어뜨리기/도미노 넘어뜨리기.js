const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 도미노의 개수, 1 <= N <= 1_000
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 1_000_000
const dp = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  for (let j = i; j > 0; j--) {
    if (dp[j - 1] === 0) {
      continue;
    }

    if (dp[j - 1] >= arr[i - 1]) {
      dp[j] = Math.max(dp[j], dp[j - 1] + arr[i - 1]);
    }
  }

  dp[1] = Math.max(dp[1], arr[i - 1]);
}

for (let i = N; i > 0; i--) {
  if (dp[i] !== 0) {
    console.log(i);
    break;
  }
}