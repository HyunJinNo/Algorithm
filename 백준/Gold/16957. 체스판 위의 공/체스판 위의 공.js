const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 1 <= R, C <= 500
const [R, C] = input[0].split(" ").map(Number);
const board = [];

for (let i = 1; i <= R; i++) {
  board.push(input[i].split(" ").map(Number));
}

const answer = Array.from({ length: R }, () => Array(C).fill(0));
const cache = Array.from({ length: R }, () => Array(C).fill([-1, -1]));

const solution = (row, col) => {
  if (cache[row][col][0] !== -1 && cache[row][col][1] !== -1) {
    return cache[row][col];
  }

  let result = [row, col];
  let minValue = 300_001;
  let [nextRow, nextCol] = [row, col];

  if (row - 1 >= 0 && col - 1 >= 0 && board[row - 1][col - 1] < minValue) {
    minValue = board[row - 1][col - 1];
    nextRow = row - 1;
    nextCol = col - 1;
  }

  if (row - 1 >= 0 && board[row - 1][col] < minValue) {
    minValue = board[row - 1][col];
    nextRow = row - 1;
    nextCol = col;
  }

  if (row - 1 >= 0 && col + 1 < C && board[row - 1][col + 1] < minValue) {
    minValue = board[row - 1][col + 1];
    nextRow = row - 1;
    nextCol = col + 1;
  }

  if (col - 1 >= 0 && board[row][col - 1] < minValue) {
    minValue = board[row][col - 1];
    nextRow = row;
    nextCol = col - 1;
  }

  if (col + 1 < C && board[row][col + 1] < minValue) {
    minValue = board[row][col + 1];
    nextRow = row;
    nextCol = col + 1;
  }

  if (row + 1 < R && col - 1 >= 0 && board[row + 1][col - 1] < minValue) {
    minValue = board[row + 1][col - 1];
    nextRow = row + 1;
    nextCol = col - 1;
  }

  if (row + 1 < R && board[row + 1][col] < minValue) {
    minValue = board[row + 1][col];
    nextRow = row + 1;
    nextCol = col;
  }

  if (row + 1 < R && col + 1 < C && board[row + 1][col + 1] < minValue) {
    minValue = board[row + 1][col + 1];
    nextRow = row + 1;
    nextCol = col + 1;
  }

  if (minValue < board[row][col]) {
    result = solution(nextRow, nextCol);
  }

  cache[row][col] = result;
  return result;
};

for (let row = 0; row < R; row++) {
  for (let col = 0; col < C; col++) {
    const [destRow, destCol] = solution(row, col);
    answer[destRow][destCol] += 1;
  }
}

console.table(answer.join("\n").replaceAll(",", " "));