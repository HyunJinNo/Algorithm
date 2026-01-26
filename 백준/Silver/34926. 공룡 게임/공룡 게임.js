const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 맵의 길이
// K: 공룡의 점프 거리
// 2 <= K < N <= 1_000_000
const [N, K] = input[0].split(" ").map(Number);
const str = input[1].trim();
const arr = new Int8Array(N).fill(false);
arr[0] = true;

for (let i = 1; i < N; i++) {
  if (str[i] === "#") {
    continue;
  }

  if (i - K < 0) {
    arr[i] = arr[i - 1];
  } else {
    arr[i] = arr[i - 1] || arr[i - K];
  }
}

console.log(arr[N - 1] ? "YES" : "NO");