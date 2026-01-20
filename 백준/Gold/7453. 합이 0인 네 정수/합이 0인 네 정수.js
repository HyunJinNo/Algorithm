const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 배열의 크기, 1 <= n <= 4_000
const A = new Int32Array(n);
const B = new Int32Array(n);
const C = new Int32Array(n);
const D = new Int32Array(n);

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  A[i - 1] = arr[0];
  B[i - 1] = arr[1];
  C[i - 1] = arr[2];
  D[i - 1] = arr[3];
}

const leftSums = new Map();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    leftSums.set(A[i] + B[j], (leftSums.get(A[i] + B[j]) ?? 0) + 1);
  }
}
let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const target = 0 - C[i] - D[j];

    if (leftSums.has(target)) {
      answer += leftSums.get(target);
    }
  }
}

console.log(answer);