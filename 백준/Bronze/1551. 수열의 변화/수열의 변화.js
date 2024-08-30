const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 수열의 크기, 1 <= N <= 20
// K: 수열 변화의 횟수, 0 <= K <= N - 1
const [N, K] = input[0].trim().split(" ").map(Number);
let A = input[1].trim().split(",").map(Number); // -100 <= A[i] <= 100
let answer = A;

for (let iter = 0; iter < K; iter++) {
  answer = [];
  for (let i = 1; i < N - iter; i++) {
    answer.push(A[i] - A[i - 1]);
  }
  A = answer;
}

console.log(A.toString());
