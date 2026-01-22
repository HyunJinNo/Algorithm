const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 집합의 크기, 5 <= N <= 1_000
const arr = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i])); // 1 <= arr[i] <= 200_000_000
}

const numSet = new Set();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    numSet.add(arr[i] + arr[j]);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (numSet.has(arr[i] - arr[j])) {
      answer = Math.max(answer, arr[i]);
    }
  }
}

console.log(answer);