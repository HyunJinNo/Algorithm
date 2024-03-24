const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require('fs').readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 보드의 크기, 2 <= n <= 100
const k = Number(input[1]); // 사과의 개수, 0 <= k <= 100
const l = Number(input[k + 2]); // 뱀의 방향 변환 횟수, 1 <= l <= 100

/**
 * board[row][col] === 0 -> 아무 것도 없음
 * board[row][col] === 1 -> 사과
 * board[row][col] === 2 -> 뱀 자기 자신의 몸
 */
const board = Array.from(Array(n), () => new Array(n).fill(0));
board[0][0] = 2;

// 뱀의 방향 변환 정보
const directionInfo = Array.from(Array(l), () => new Array(2).fill(0));

for (let i = 0; i < k; i++) {
  const [row, col] = input[i + 2].split(" ").map(Number);
  board[row - 1][col - 1] = 1;
}

for (let i = 0; i < l; i++) {
  const temp = input[i + k + 3].split(" ");
  const x = Number(temp[0]); // 1 <= x <= 10,000
  const c = temp[1].trim();
  directionInfo[i] = [x, c];
}

const snake = [[0, 0]];
let direction = "E";
let time = 0;
let index = 0;

Loop: while (true) {
  time++;
  const row = snake[0][0];
  const col = snake[0][1];

  switch (direction) {
    case "N":
      if (row - 1 < 0) {
        break Loop;
      }
      switch (board[row - 1][col]) {
        case 0:
          snake.unshift([row - 1, col]);
          const temp = snake.pop();
          board[row - 1][col] = 2;
          board[temp[0]][temp[1]] = 0;
          break;
        case 1:
          snake.unshift([row - 1, col]);
          board[row - 1][col] = 2;
          break;
        default: // case 2:
          break Loop;
      }
      break;

    case "E":
      if (col + 1 >= n) {
        break Loop;
      }
      switch (board[row][col + 1]) {
        case 0:
          snake.unshift([row, col + 1]);
          const temp = snake.pop();
          board[row][col + 1] = 2;
          board[temp[0]][temp[1]] = 0;
          break;
        case 1:
          snake.unshift([row, col + 1]);
          board[row][col + 1] = 2;
          break;
        default: // case 2:
          break Loop;
      }
      break;

    case "S":
      if (row + 1 >= n) {
        break Loop;
      }
      switch (board[row + 1][col]) {
        case 0:
          snake.unshift([row + 1, col]);
          const temp = snake.pop();
          board[row + 1][col] = 2;
          board[temp[0]][temp[1]] = 0;
          break;
        case 1:
          snake.unshift([row + 1, col]);
          board[row + 1][col] = 2;
          break;
        default: // case 2:
          break Loop;
      }
      break;

    default: // case "W":
      if (col - 1 < 0) {
        break Loop;
      }
      switch (board[row][col - 1]) {
        case 0:
          snake.unshift([row, col - 1]);
          const temp = snake.pop();
          board[row][col - 1] = 2;
          board[temp[0]][temp[1]] = 0;
          break;
        case 1:
          snake.unshift([row, col - 1]);
          board[row][col - 1] = 2;
          break;
        default: // case 2:
          break Loop;
      }
      break;
  }

  if (index < l && directionInfo[index][0] == time) {
    switch (direction) {
      case "N":
        if (directionInfo[index][1] == "L") {
          direction = "W";
        } else {
          direction = "E";
        }
        break;
      case "E":
        if (directionInfo[index][1] == "L") {
          direction = "N";
        } else {
          direction = "S";
        }
        break;
      case "S":
        if (directionInfo[index][1] == "L") {
          direction = "E";
        } else {
          direction = "W";
        }
        break;
      default: // case "W":
        if (directionInfo[index][1] == "L") {
          direction = "S";
        } else {
          direction = "N";
        }
        break;
    }
    index++;
  }
}

console.log(time);