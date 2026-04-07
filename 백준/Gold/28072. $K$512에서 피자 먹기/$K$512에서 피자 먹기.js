const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 피자 조각의 개수, 1 <= N <= 1_000_000
// K: 마법의 수, 1 <= K <= 100_000
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 1_000_000
const count = Array(K).fill(0);
const psum = Array(N).fill(0);

psum[0] = arr[0] % K;
count[psum[0]]++;

for (let i = 1; i < N; i++) {
  psum[i] = psum[i - 1] + arr[i];
  psum[i] %= K;
  count[psum[i]]++;
}

console.log(Math.max(...count));