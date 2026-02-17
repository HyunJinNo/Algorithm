const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const T = Number(input[0]); // 테스트케이스 수
let index = 1;
let answer = "";

for (let iter = 0; iter < T; iter++) {
  const N = Number(input[index++]); // 날의 수, 2 <= N <= 1_000_000
  const arr = new Int16Array(input[index++].split(" ").map(Number)); // 1 <= arr[i] <= 10_000
  const maxStock = new Int16Array(N);
  maxStock[N - 1] = arr[N - 1];

  for (let i = N - 2; i >= 0; i--) {
    maxStock[i] = Math.max(maxStock[i + 1], arr[i]);
  }

  let result = 0;

  for (let i = 0; i < N; i++) {
    result += maxStock[i] - arr[i];
  }

  answer += `${result}\n`;
}

console.log(answer.trim());