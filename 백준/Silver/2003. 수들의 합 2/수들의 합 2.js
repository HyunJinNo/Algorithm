const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 1 <= N <= 10_000
// 1 <= M <= 300_000_000
const [N, M] = input[0].split(" ").map(Number);
const A = new Int16Array(input[1].split(" ").map(Number)); // 1 <= A[i] <= 30_000
const arrSum = new Int32Array(N).fill(0);
arrSum[0] = A[0];

for (let i = 1; i < N; i++) {
  arrSum[i] = arrSum[i - 1] + A[i];
}

let startIndex = 0;
let endIndex = 0;
let answer = 0;

while (endIndex < N) {
  if (startIndex === 0) {
    if (arrSum[endIndex] > M) {
      startIndex++;
    } else if (arrSum[endIndex] < M) {
      endIndex++;
    } else {
      answer++;
      endIndex++;
    }
  } else {
    if (arrSum[endIndex] - arrSum[startIndex - 1] > M) {
      startIndex++;
    } else if (arrSum[endIndex] - arrSum[startIndex - 1] < M) {
      endIndex++;
    } else {
      answer++;
      endIndex++;
    }
  }
}

console.log(answer);