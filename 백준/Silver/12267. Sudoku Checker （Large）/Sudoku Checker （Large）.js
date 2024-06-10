const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 수, 1 <= T <= 100
let index = 1;
let board = [];

/**
 * 스도쿠 게임 초기화
 * @param {number} N
 */
const init = (N) => {
  board = [];

  for (let iter = 0; iter < N * N; iter++) {
    board.push(new Int16Array(input[index++].trim().split(" ").map(Number)));
  }
};

const isValid = (N) => {
  for (let row = 0; row < N * N; row++) {
    let flag = true;
    const visited = Array(N * N + 1).fill(false);

    for (let col = 0; col < N * N; col++) {
      if (board[row][col] > N * N || visited[board[row][col]]) {
        flag = false;
        break;
      } else {
        visited[board[row][col]] = true;
      }
    }

    if (!flag) {
      return false;
    }
  }

  for (let col = 0; col < N * N; col++) {
    let flag = true;
    const visited = Array(N * N + 1).fill(false);

    for (let row = 0; row < N * N; row++) {
      if (board[row][col] > N * N || visited[board[row][col]]) {
        flag = false;
        break;
      } else {
        visited[board[row][col]] = true;
      }
    }

    if (!flag) {
      return false;
    }
  }

  for (let row = 0; row < N * N; row += N) {
    for (let col = 0; col < N * N; col += N) {
      let flag = true;
      const visited = Array(N * N + 1).fill(false);

      loop: for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (
            board[row + i][col + j] > N * N ||
            visited[board[row + i][col + j]]
          ) {
            flag = false;
            break loop;
          } else {
            visited[board[row + i][col + j]] = true;
          }
        }
      }

      if (!flag) {
        return false;
      }
    }
  }

  return true;
};

for (let iter = 1; iter <= T; iter++) {
  const N = Number(input[index++]);
  init(N);

  if (isValid(N)) {
    console.log(`Case #${iter}: Yes`);
  } else {
    console.log(`Case #${iter}: No`);
  }
}
