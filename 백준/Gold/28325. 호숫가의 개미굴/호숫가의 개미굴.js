const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 방의 개수, 2 <= N <= 250_000
const C = input[1].split(" ").map(Number);
const visited = new Int8Array(Array(N).fill(false));
let answer = 0n;
let startIndex = 0;

for (let i = 0; i < N; i++) {
  if (C[i] !== 0) {
    startIndex = i;
    break;
  }
}

for (let i = 0; i < N; i++) {
  const index = (i + startIndex) % N;

  if (C[index] !== 0) {
    answer += BigInt(C[index]);
  } else if (!visited[(index - 1 + N) % N] && !visited[(index + 1) % N]) {
    answer += 1n;
    visited[index] = true;
  }
}

console.log(answer.toString());