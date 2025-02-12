const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const findPos = (str) => {
  const row = Number(str[1]) - 1;
  const col = str.charCodeAt(0) - 97;
  return [row, col];
};

const [sourceRow, sourceCol] = findPos(input[0].trim());
const [targetRow, targetCol] = findPos(input[1].trim());
const board = Array.from({ length: 8 }, () => Array(8).fill(Infinity));
board[sourceRow][sourceCol] = 0;
const arr = [[sourceRow, sourceCol]];
let length = arr.length;
let index = 0;

while (index < length) {
  const [row, col] = arr[index++];
  const count = board[row][col];

  if (row === targetRow && col === targetCol) {
    console.log(count);
    break;
  }

  if (row + 2 < 8 && col - 1 >= 0 && board[row + 2][col - 1] === Infinity) {
    board[row + 2][col - 1] = count + 1;
    arr.push([row + 2, col - 1]);
    length++;
  }

  if (row + 2 < 8 && col + 1 < 8) {
    board[row + 2][col + 1] = count + 1;
    arr.push([row + 2, col + 1]);
    length++;
  }

  if (row + 1 < 8 && col + 2 < 8) {
    board[row + 1][col + 2] = count + 1;
    arr.push([row + 1, col + 2]);
    length++;
  }

  if (row - 1 >= 0 && col + 2 < 8) {
    board[row - 1][col + 2] = count + 1;
    arr.push([row - 1, col + 2]);
    length++;
  }

  if (row - 2 >= 0 && col + 1 < 8) {
    board[row - 2][col + 1] = count + 1;
    arr.push([row - 2, col + 1]);
    length++;
  }

  if (row - 2 >= 0 && col - 1 >= 0) {
    board[row - 2][col - 1] = count + 1;
    arr.push([row - 2, col - 1]);
    length++;
  }

  if (row - 1 >= 0 && col - 2 >= 0) {
    board[row - 1][col - 2] = count + 1;
    arr.push([row - 1, col - 2]);
    length++;
  }

  if (row + 1 < 8 && col - 2 >= 0) {
    board[row + 1][col - 2] = count + 1;
    arr.push([row + 1, col - 2]);
    length++;
  }
}
