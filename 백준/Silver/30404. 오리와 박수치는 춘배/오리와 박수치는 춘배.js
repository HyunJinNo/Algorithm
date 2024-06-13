const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 소리를 내는 횟수, 1 <= N <= 100_000
// K: 소리를 낸 이후의 제한 시간, 0 <= K <= 1_000_000
const [N, K] = input[0].split(" ").map(Number);
const X = new Int32Array(input[1].trim().split(" ").map(Number)); // 1 <= X[i] <= 1_000_000
let answer = 0;
let bound = X[0] + K;

for (let i = 1; i < N; i++) {
  if (bound < X[i]) {
    answer++;
    bound = X[i] + K;
  }
}
answer++;

console.log(answer);
