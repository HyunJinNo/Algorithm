const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 3 <= N <= 999
const target = Number(input[1]); // 1 <= target <= N * N
const arr = Array.from(Array(N), () => Array(N).fill(0));
const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
let index = 0;
let row = 0;
let col = 0;
let answer = [0, 0];

for (let num = N * N; num >= 1; num--) {
  if (num === target) {
    answer[0] = row + 1;
    answer[1] = col + 1;
  }

  arr[row][col] = num;
  const nextRow = row + direction[index][0];
  const nextCol = col + direction[index][1];

  if (
    nextRow >= 0 &&
    nextRow < N &&
    nextCol >= 0 &&
    nextCol < N &&
    arr[nextRow][nextCol] === 0
  ) {
    row = nextRow;
    col = nextCol;
  } else {
    index = (index + 1) % 4;
    row += direction[index][0];
    col += direction[index][1];
  }
}

for (let temp of arr) {
  console.log(temp.join(" "));
}
console.log(answer[0], answer[1]);
