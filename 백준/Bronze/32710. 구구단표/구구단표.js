const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

const N = Number(input); // 1 <= N <= 100
const visited = Array(101).fill(0);

for (let a = 1; a <= 9; a++) {
  for (let b = 1; b <= 9; b++) {
    visited[a * b] = 1;
  }
}

console.log(visited[N]);
