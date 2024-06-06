const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 보드의 크기, 1 <= N <= 20
const board = [];
for (let i = 1; i <= N; i++) {
  board.push(new Int32Array(input[i].trim().split(" ").map(Number)));
}

const copyBoard = (board) => {
  const visited = Array.from(Array(N), () => Array(N).fill(false));
  const result = Array.from(Array(N), () => new Int32Array(N).fill(0));
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      result[row][col] = board[row][col];
    }
  }

  return [visited, result];
};

const moveUp = (board) => {
  const [visited, result] = copyBoard(board);

  for (let col = 0; col < N; col++) {
    for (let row = 1; row < N; row++) {
      if (result[row][col] === 0) {
        continue;
      }

      let i = row - 1;
      while (i >= 0 && !visited[i][col] && result[i][col] === 0) {
        result[i][col] = result[i + 1][col];
        result[i + 1][col] = 0;
        i--;
      }

      if (i >= 0 && !visited[i][col] && result[i][col] === result[i + 1][col]) {
        result[i][col] *= 2;
        result[i + 1][col] = 0;
        visited[i][col] = true;
      }
    }
  }

  return result;
};

const moveDown = (board) => {
  const [visited, result] = copyBoard(board);

  for (let col = 0; col < N; col++) {
    for (let row = N - 2; row >= 0; row--) {
      if (result[row][col] === 0) {
        continue;
      }

      let i = row + 1;
      while (i < N && !visited[i][col] && result[i][col] === 0) {
        result[i][col] = result[i - 1][col];
        result[i - 1][col] = 0;
        i++;
      }

      if (i < N && !visited[i][col] && result[i][col] === result[i - 1][col]) {
        result[i][col] *= 2;
        result[i - 1][col] = 0;
        visited[i][col] = true;
      }
    }
  }

  return result;
};

const moveRight = (board) => {
  const [visited, result] = copyBoard(board);

  for (let row = 0; row < N; row++) {
    for (let col = N - 2; col >= 0; col--) {
      if (result[row][col] === 0) {
        continue;
      }

      let j = col + 1;
      while (j < N && !visited[row][j] && result[row][j] === 0) {
        result[row][j] = result[row][j - 1];
        result[row][j - 1] = 0;
        j++;
      }

      if (j < N && !visited[row][j] && result[row][j] === result[row][j - 1]) {
        result[row][j] *= 2;
        result[row][j - 1] = 0;
        visited[row][j] = true;
      }
    }
  }

  return result;
};

const moveLeft = (board) => {
  const [visited, result] = copyBoard(board);

  for (let row = 0; row < N; row++) {
    for (let col = 1; col < N; col++) {
      if (result[row][col] === 0) {
        continue;
      }

      let j = col - 1;
      while (j >= 0 && !visited[row][j] && result[row][j] === 0) {
        result[row][j] = result[row][j + 1];
        result[row][j + 1] = 0;
        j--;
      }

      if (j >= 0 && !visited[row][j] && result[row][j] === result[row][j + 1]) {
        result[row][j] *= 2;
        result[row][j + 1] = 0;
        visited[row][j] = true;
      }
    }
  }

  return result;
};

const solve = (count, board) => {
  if (count === 0) {
    let result = 0;
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        result = Math.max(result, board[row][col]);
      }
    }
    return result;
  }

  let result = 0;

  // 위로 이동
  result = Math.max(result, solve(count - 1, moveUp(board)));

  // 아래로 이동
  result = Math.max(result, solve(count - 1, moveDown(board)));

  // 오른쪽으로 이동
  result = Math.max(result, solve(count - 1, moveRight(board)));

  // 왼쪽으로 이동
  result = Math.max(result, solve(count - 1, moveLeft(board)));

  return result;
};

console.log(solve(5, board));
