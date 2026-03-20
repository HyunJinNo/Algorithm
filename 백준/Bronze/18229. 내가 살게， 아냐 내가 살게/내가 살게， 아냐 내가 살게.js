const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 사람의 수, 1 <= N <= 100
// M: 손을 뻗는 횟수, 1 <= M <= 100
// K: 사람들과 점원의 거리, 1 <= K <= 10_000_000
const [N, M, K] = input[0].split(" ").map(Number);
const arr = [];
const distance = new Int32Array(Array(N).fill(0));

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

loop: for (let col = 0; col < M; col++) {
  for (let row = 0; row < N; row++) {
    distance[row] += arr[row][col];

    if (distance[row] >= K) {
      console.log(row + 1, col + 1);
      break loop;
    }
  }
}