const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 2 <= N, M <= 1_000
const [N, M] = input[0].trim().split(" ").map(Number);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}
const pos = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1) {
      pos.push([i, j]);
    }
  }
}

console.log(Math.abs(pos[0][0] - pos[1][0]) + Math.abs(pos[0][1] - pos[1][1]));
