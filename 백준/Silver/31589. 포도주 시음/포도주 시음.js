const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 포도주의 수
// K: 산들이의 주량
// 1 <= K <= N <= 300_000
const [N, K] = input[0].split(" ").map(Number);
const T = new Int32Array(input[1].split(" ").map(Number)); // 1 <= T <= 1_000_000_000
let answer = 0;
let leftIndex = 0;
let rightIndex = N - 1;

T.sort((a, b) => a - b);

for (let iter = 0; iter < K; iter++) {
  if (iter % 2 === 0) {
    if (iter === 0) {
      answer += T[rightIndex--];
    } else {
      answer += T[rightIndex--] - T[leftIndex++];
    }
  }
}

console.log(answer);