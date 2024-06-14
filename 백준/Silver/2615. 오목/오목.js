const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const board = [];
for (let i = 0; i < 19; i++) {
  board.push(new Int8Array(input[i].trim().split(" ").map(Number)));
}
let answer = [0, -1, -1]; // [winner, row, col]

const check = (row, col, player) => {
  if (row - 4 >= 0 && col + 4 < 19) {
    let flag = true;
    if (row + 1 < 19 && col - 1 >= 0 && board[row + 1][col - 1] === player) {
      flag = false;
    }
    for (let i = 0; i < 5; i++) {
      if (board[row - i][col + i] !== player) {
        flag = false;
        break;
      }
    }
    if (row - 5 >= 0 && col + 5 < 19 && board[row - 5][col + 5] === player) {
      flag = false;
    }
    if (flag) {
      return true;
    }
  }

  if (col + 4 < 19) {
    let flag = true;
    if (col - 1 >= 0 && board[row][col - 1] === player) {
      flag = false;
    }
    for (let i = 0; i < 5; i++) {
      if (board[row][col + i] !== player) {
        flag = false;
        break;
      }
    }
    if (col + 5 < 19 && board[row][col + 5] === player) {
      flag = false;
    }
    if (flag) {
      return true;
    }
  }

  if (row + 4 < 19 && col + 4 < 19) {
    let flag = true;
    if (row - 1 >= 0 && col - 1 >= 0 && board[row - 1][col - 1] === player) {
      flag = false;
    }
    for (let i = 0; i < 5; i++) {
      if (board[row + i][col + i] !== player) {
        flag = false;
        break;
      }
    }
    if (row + 5 < 19 && col + 5 < 19 && board[row + 5][col + 5] === player) {
      flag = false;
    }
    if (flag) {
      return true;
    }
  }

  if (row + 4 < 19) {
    let flag = true;
    if (row - 1 >= 0 && board[row - 1][col] === player) {
      flag = false;
    }
    for (let i = 0; i < 5; i++) {
      if (board[row + i][col] !== player) {
        flag = false;
        break;
      }
    }
    if (row + 5 < 19 && board[row + 5][col] === player) {
      flag = false;
    }

    if (flag) {
      return true;
    }
  }

  return false;
};

loop: for (let row = 0; row < 19; row++) {
  for (let col = 0; col < 19; col++) {
    if (board[row][col] !== 0 && check(row, col, board[row][col])) {
      answer[0] = board[row][col];
      answer[1] = row + 1;
      answer[2] = col + 1;
      break loop;
    }
  }
}

if (answer[0] === 0) {
  console.log(0);
} else {
  console.log(answer[0]);
  console.log(answer[1], answer[2]);
}
