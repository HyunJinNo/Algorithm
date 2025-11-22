const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 애플파이의 개수
// K: 먹으려는 애플파이의 개수
// 1 <= K <= N <= 100_000
const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number); // 1 <= A[i] <= 100
let sum = 0;
let answer = 0;

for (let i = 0; i < K - 1; i++) {
  sum += A[i];
}

for (let i = K - 1; i <= N + K - 2; i++) {
  sum += A[i % N];
  answer = Math.max(answer, sum);
  sum -= A[i - K + 1];
}

console.log(answer);