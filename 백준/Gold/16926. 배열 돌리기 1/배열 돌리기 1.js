const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 가로의 길이, 2 <= N <= 300
// M : 세로의 길이, 2 <= M <= 300
// R: 회전의 수, 1 <= R <= 1_000
const [N, M, R] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const rotate = (startRow, startCol, endRow, endCol) => {
  if (startRow >= endRow || startCol >= endCol) {
    return;
  }

  const temp = arr[startRow][startCol];

  for (let col = startCol; col <= endCol - 1; col++) {
    arr[startRow][col] = arr[startRow][col + 1];
  }
  for (let row = startRow; row <= endRow - 1; row++) {
    arr[row][endCol] = arr[row + 1][endCol];
  }
  for (let col = endCol; col >= startCol + 1; col--) {
    arr[endRow][col] = arr[endRow][col - 1];
  }
  for (let row = endRow; row >= startRow + 2; row--) {
    arr[row][startCol] = arr[row - 1][startCol];
  }
  arr[startRow + 1][startCol] = temp;

  rotate(startRow + 1, startCol + 1, endRow - 1, endCol - 1);
};

for (let iter = 0; iter < R; iter++) {
  rotate(0, 0, N - 1, M - 1);
}

let answer = "";
for (let i = 0; i < N; i++) {
  answer += `${arr[i].join(" ")}\n`;
}
console.log(answer);
