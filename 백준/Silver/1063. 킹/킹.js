const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// king: 킹의 위치
// stone: 돌의 위치
// N: 움직이는 횟수, 1 <= N <= 50
let [king, stone, N] = input[0].trim().split(" ");
let row = Number(king[1]);
let col = king.charCodeAt(0) - 64;

// 0: 빈 칸
// 1: 돌
// 2: 킹
const board = Array.from(Array(9), () => Array(9).fill(0));
board[row][col] = 2;
board[Number(stone[1])][stone.charCodeAt(0) - 64] = 1;

for (let i = 1; i <= Number(N); i++) {
  const move = input[i].trim();

  switch (move) {
    case "R":
      if (col + 2 <= 8) {
        board[row][col + 2] = Math.max(
          board[row][col + 1],
          board[row][col + 2]
        );
        board[row][col + 1] = board[row][col];
        board[row][col] = 0;
        col++;
      } else if (col + 1 <= 8 && board[row][col + 1] === 0) {
        board[row][col + 1] = board[row][col];
        board[row][col] = 0;
        col++;
      }
      break;
    case "L":
      if (col - 2 >= 1) {
        board[row][col - 2] = Math.max(
          board[row][col - 1],
          board[row][col - 2]
        );
        board[row][col - 1] = board[row][col];
        board[row][col] = 0;
        col--;
      } else if (col - 1 >= 1 && board[row][col - 1] === 0) {
        board[row][col - 1] = board[row][col];
        board[row][col] = 0;
        col--;
      }
      break;
    case "B":
      if (row - 2 >= 1) {
        board[row - 2][col] = Math.max(
          board[row - 1][col],
          board[row - 2][col]
        );
        board[row - 1][col] = board[row][col];
        board[row][col] = 0;
        row--;
      } else if (row - 1 >= 1 && board[row - 1][col] === 0) {
        board[row - 1][col] = board[row][col];
        board[row][col] = 0;
        row--;
      }
      break;
    case "T":
      if (row + 2 <= 8) {
        board[row + 2][col] = Math.max(
          board[row + 1][col],
          board[row + 2][col]
        );
        board[row + 1][col] = board[row][col];
        board[row][col] = 0;
        row++;
      } else if (row + 1 <= 8 && board[row + 1][col] === 0) {
        board[row + 1][col] = board[row][col];
        board[row][col] = 0;
        row++;
      }
      break;
    case "RT":
      if (row + 2 <= 8 && col + 2 <= 8) {
        board[row + 2][col + 2] = Math.max(
          board[row + 1][col + 1],
          board[row + 2][col + 2]
        );
        board[row + 1][col + 1] = board[row][col];
        board[row][col] = 0;
        row++;
        col++;
      } else if (
        row + 1 <= 8 &&
        col + 1 <= 8 &&
        board[row + 1][col + 1] === 0
      ) {
        board[row + 1][col + 1] = board[row][col];
        board[row][col] = 0;
        row++;
        col++;
      }
      break;
    case "LT":
      if (row + 2 <= 8 && col - 2 >= 1) {
        board[row + 2][col - 2] = Math.max(
          board[row + 1][col - 1],
          board[row + 2][col - 2]
        );
        board[row + 1][col - 1] = board[row][col];
        board[row][col] = 0;
        row++;
        col--;
      } else if (
        row + 1 <= 8 &&
        col - 1 >= 1 &&
        board[row + 1][col - 1] === 0
      ) {
        board[row + 1][col - 1] = board[row][col];
        board[row][col] = 0;
        row++;
        col--;
      }
      break;
    case "RB":
      if (row - 2 >= 1 && col + 2 <= 8) {
        board[row - 2][col + 2] = Math.max(
          board[row - 1][col + 1],
          board[row - 2][col + 2]
        );
        board[row - 1][col + 1] = board[row][col];
        board[row][col] = 0;
        row--;
        col++;
      } else if (
        row - 1 >= 1 &&
        col + 1 <= 8 &&
        board[row - 1][col + 1] === 0
      ) {
        board[row - 1][col + 1] = board[row][col];
        board[row][col] = 0;
        row--;
        col++;
      }
      break;
    case "LB":
      if (row - 2 >= 1 && col - 2 >= 1) {
        board[row - 2][col - 2] = Math.max(
          board[row - 1][col - 1],
          board[row - 2][col - 2]
        );
        board[row - 1][col - 1] = board[row][col];
        board[row][col] = 0;
        row--;
        col--;
      } else if (
        row - 1 >= 1 &&
        col - 1 >= 1 &&
        board[row - 1][col - 1] === 0
      ) {
        board[row - 1][col - 1] = board[row][col];
        board[row][col] = 0;
        row--;
        col--;
      }
      break;
    default:
      break;
  }
}

const answer = ["", ""];

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    switch (board[i][j]) {
      case 2:
        answer[0] = `${String.fromCharCode(j + 64)}${i}`;
        break;
      case 1:
        answer[1] = `${String.fromCharCode(j + 64)}${i}`;
        break;
      default:
        break;
    }
  }
}
console.log(answer[0]);
console.log(answer[1]);
