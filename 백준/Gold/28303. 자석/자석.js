const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 2 <= N <= 500_000
// 0 <= K <= 2_000
const [N, K] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number); // 0 <= a[i] <= 1_000_000_000
let answer = Number.MIN_SAFE_INTEGER;

const arr1 = a.map((value, index) => value - index * K);
let min = arr1[0];

for (let i = 1; i < N; i++) {
  answer = Math.max(answer, arr1[i] - min);
  min = Math.min(min, arr1[i]);
}

const arr2 = a.reverse().map((value, index) => value - index * K);
min = arr2[0];

for (let i = 1; i < N; i++) {
  answer = Math.max(answer, arr2[i] - min);
  min = Math.min(min, arr2[i]);
}

console.log(answer);