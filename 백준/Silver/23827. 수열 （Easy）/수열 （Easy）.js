const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 수열의 길이, 2 <= N <= 500_000
const A = new Int32Array(input[1].split(" ").map(Number));
const sum = Array(N).fill(0);
sum[N - 1] = A[N - 1];

for (let i = N - 2; i >= 0; i--) {
  sum[i] = (sum[i + 1] + A[i]) % 1_000_000_007;
}

let answer = 0;

for (let i = 0; i < N - 1; i++) {
  answer += (A[i] * sum[i + 1]) % 1_000_000_007;
}

console.log(answer % 1_000_000_007);
