const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 1 <= N, M <= 100
// N: 세로의 길이
// M: 가로의 길이
const [N, M] = input[0].trim().split(" ").map(Number);
const arr = Array.from(Array(N), () => Array(M).fill(false));
let count = 0;
let answer = 0;

for (let i = 0; i < N; i++) {
  const temp = input[i + 1].trim().split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    if (temp[j] === 1) {
      arr[i][j] = true;
      count++;
    }
  }
}

while (count > 0) {
  answer++;
  let row = 0;
  let col = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] && row <= i && col <= j) {
        arr[i][j] = false;
        row = i;
        col = j;
        count--;
      }
    }
  }
}

console.log(answer);
