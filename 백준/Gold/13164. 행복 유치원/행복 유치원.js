const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 원생의 수, 1 <= N <= 300_000
// K: 조의 개수, 1 <= K <= N
const [N, K] = input[0].split(" ").map(Number);
const arr = new Int32Array(input[1].split(" ").map(Number)); // 1 <= arr[i] <= 1_000_000_000
const diff = [];
let answer = 0;

for (let i = 0; i < N - 1; i++) {
  diff.push(arr[i + 1] - arr[i]);
}

diff.sort((a, b) => a - b);

for (let i = 0; i < N - K; i++) {
  answer += diff[i];
}

console.log(answer);