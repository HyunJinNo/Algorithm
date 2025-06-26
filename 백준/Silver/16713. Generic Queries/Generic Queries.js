const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 수열의 길이, 1 <= N = 1_000_000
// Q: 쿼리의 개수, 1 <= Q <= 3_000_000
const [N, Q] = input[0].split(" ").map(Number);
const a = new Int32Array(input[1].split(" ").map(Number));
const arr = Array(N + 1).fill(0);
arr[1] = a[0];

for (let i = 1; i < N; i++) {
  arr[i + 1] = arr[i] ^ a[i];
}

let answer = 0;

for (let i = 2; i < 2 + Q; i++) {
  const [s, e] = input[i].split(" ").map(Number);
  answer ^= arr[e] ^ arr[s - 1];
}

console.log(answer);