const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const board = [];
const nums = [];

const init = () => {
  for (let i = 0; i < 5; i++) {
    board.push(new Int8Array(input[i].trim().split(" ").map(Number)));
  }
  for (let i = 5; i < 10; i++) {
    const arr = input[i].trim().split(" ").map(Number);
    for (let num of arr) {
      nums.push(num);
    }
  }
};

const solve = () => {
  for (let index = 0; index < 25; index++) {
    const num = nums[index];

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (board[row][col] === num) {
          board[row][col] = 0;
          break;
        }
      }
    }

    if (check()) {
      return index + 1;
    }
  }

  return -1;
};

/**
 * 빙고 상태인지 확인하는 함수
 * @returns 빙고 여부
 */
const check = () => {
  let count = 0;

  for (let row = 0; row < 5; row++) {
    let flag = true;
    for (let col = 0; col < 5; col++) {
      if (board[row][col] !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      count++;
    }
  }

  for (let col = 0; col < 5; col++) {
    let flag = true;
    for (let row = 0; row < 5; row++) {
      if (board[row][col] !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      count++;
    }
  }

  let flag = true;
  for (let i = 0; i < 5; i++) {
    if (board[i][i] !== 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    count++;
  }

  flag = true;
  for (let i = 4; i >= 0; i--) {
    if (board[i][4 - i] !== 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    count++;
  }

  if (count >= 3) {
    return true;
  } else {
    return false;
  }
};

init();
console.log(solve());
