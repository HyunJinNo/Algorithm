const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 7 <= N <= 1_000
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(new Int8Array(input[i].trim().split(" ").map(Number)));
}

let pos1 = [0, 0]; // 성규의 위치
let pos2 = [0, 0]; // 교수님의 위치

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 2) {
      pos1 = [i, j];
    } else if (arr[i][j] === 5) {
      pos2 = [i, j];
    }
  }
}

if (
  (pos1[0] - pos2[0]) * (pos1[0] - pos2[0]) +
    (pos1[1] - pos2[1]) * (pos1[1] - pos2[1]) <
  25
) {
  console.log(0);
  process.exit(0);
}

const startRow = Math.min(pos1[0], pos2[0]);
const endRow = Math.max(pos1[0], pos2[0]);
const startCol = Math.min(pos1[1], pos2[1]);
const endCol = Math.max(pos1[1], pos2[1]);
let count = 0;

for (let i = startRow; i <= endRow; i++) {
  for (let j = startCol; j <= endCol; j++) {
    if (arr[i][j] === 1) {
      count++;
    }
  }
}

if (count >= 3) {
  console.log(1);
} else {
  console.log(0);
}
