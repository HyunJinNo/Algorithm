const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// N: 수열의 길이, 3 <= N <= 100_000
// 1 <= K <= N
const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number); // 1 <= A[i] <= 9

const arr = Array(N).fill(0);
let num = 1;
arr[0] = num;

for (let i = 1; i < N; i++) {
  if (Math.abs(A[i] - A[i - 1]) === 1) {
    arr[i] = num;
  } else {
    arr[i] = ++num;
  }
}

const count = Array(N + 1).fill(-1);
count[0] = 0;
count[1] = 1;
count[2] = 1;

for (let i = 3; i <= N; i++) {
  count[i] = 1 + Math.min(count[i - 3], count[i - 2], count[i - 1]);

  if (i - K >= 0 && arr[i - K] === arr[i - 1]) {
    count[i] = Math.min(count[i], 1 + count[i - K]);
  }
}

console.log(count[N]);