const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

let answer = 0;
const T = Number(input[0]); // -1_000_000_000 <= T <= 1_000_000_000
const n = Number(input[1]); // 1 <= n <= 1_000
const m = Number(input[3]); // 1 <= m <= 1_000
const A = new Int32Array(input[2].split(" ").map(Number));
const B = new Int32Array(input[4].split(" ").map(Number));

const arrA = Array(n).fill(0);
arrA[0] = A[0];

for (let i = 1; i < n; i++) {
  arrA[i] = arrA[i - 1] + A[i];
}

const arrB = Array(m).fill(0);
arrB[0] = B[0];

for (let i = 1; i < m; i++) {
  arrB[i] = arrB[i - 1] + B[i];
}

const mapB = new Map();

for (let i = -1; i < m; i++) {
  for (let j = i + 1; j < m; j++) {
    if (i === -1) {
      const value = arrB[j];
      mapB.set(value, (mapB.get(value) ?? 0) + 1);
    } else {
      const value = arrB[j] - arrB[i];
      mapB.set(value, (mapB.get(value) ?? 0) + 1);
    }
  }
}

for (let i = -1; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (i === -1) {
      const value = T - arrA[j];
      answer += mapB.get(value) ?? 0;
    } else {
      const value = T - (arrA[j] - arrA[i]);
      answer += mapB.get(value) ?? 0;
    }
  }
}

console.log(answer);
