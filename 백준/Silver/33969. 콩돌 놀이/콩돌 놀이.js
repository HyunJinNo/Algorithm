const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 1 <= N <= 10
// 1 <= M <= 10
const [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N }, () => Array(M));
const answer = [0, 0]; // [S, C]

for (let i = 1; i <= N; i++) {
  const str = input[i].trim();

  for (let j = 0; j < M; j++) {
    arr[i - 1][j] = str[j];
  }
}

const isEmpty = () => {
  let result = true;

  loop: for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === "x") {
        result = false;
        break loop;
      }
    }
  }

  return result;
};

const findAnswer = (row, col, S, C) => {
  if (row === N - 1 && col === M - 1) {
    if (isEmpty()) {
      answer[0] = S;
      answer[1] = C;
      return;
    }
  }

  if (arr[row][col] !== "x") {
    if (col === M - 1) {
      findAnswer(row + 1, 0, S, C);
    } else {
      findAnswer(row, col + 1, S, C);
    }
  }

  if (row + 4 < N && col + 2 < M) {
    if (
      arr[row][col] === "x" &&
      arr[row][col + 1] === "x" &&
      arr[row][col + 2] === "x" &&
      arr[row + 1][col] === "x" &&
      arr[row + 2][col] === "x" &&
      arr[row + 2][col + 1] === "x" &&
      arr[row + 2][col + 2] === "x" &&
      arr[row + 3][col + 2] === "x" &&
      arr[row + 4][col] === "x" &&
      arr[row + 4][col + 1] === "x" &&
      arr[row + 4][col + 2] === "x"
    ) {
      arr[row][col] = ".";
      arr[row][col + 1] = ".";
      arr[row][col + 2] = ".";
      arr[row + 1][col] = ".";
      arr[row + 2][col] = ".";
      arr[row + 2][col + 1] = ".";
      arr[row + 2][col + 2] = ".";
      arr[row + 3][col + 2] = ".";
      arr[row + 4][col] = ".";
      arr[row + 4][col + 1] = ".";
      arr[row + 4][col + 2] = ".";

      if (col === M - 1) {
        findAnswer(row + 1, 0, S + 1, C);
      } else {
        findAnswer(row, col + 1, S + 1, C);
      }

      arr[row][col] = "x";
      arr[row][col + 1] = "x";
      arr[row][col + 2] = "x";
      arr[row + 1][col] = "x";
      arr[row + 2][col] = "x";
      arr[row + 2][col + 1] = "x";
      arr[row + 2][col + 2] = "x";
      arr[row + 3][col + 2] = "x";
      arr[row + 4][col] = "x";
      arr[row + 4][col + 1] = "x";
      arr[row + 4][col + 2] = "x";
    }

    if (
      arr[row][col] === "x" &&
      arr[row][col + 1] === "x" &&
      arr[row][col + 2] === "x" &&
      arr[row + 1][col] === "x" &&
      arr[row + 2][col] === "x" &&
      arr[row + 3][col] === "x" &&
      arr[row + 4][col] === "x" &&
      arr[row + 4][col + 1] === "x" &&
      arr[row + 4][col + 2] === "x"
    ) {
      arr[row][col] = ".";
      arr[row][col + 1] = ".";
      arr[row][col + 2] = ".";
      arr[row + 1][col] = ".";
      arr[row + 2][col] = ".";
      arr[row + 3][col] = ".";
      arr[row + 4][col] = ".";
      arr[row + 4][col + 1] = ".";
      arr[row + 4][col + 2] = ".";

      if (col === M - 1) {
        findAnswer(row + 1, 0, S, C + 1);
      } else {
        findAnswer(row, col + 1, S, C + 1);
      }

      arr[row][col] = "x";
      arr[row][col + 1] = "x";
      arr[row][col + 2] = "x";
      arr[row + 1][col] = "x";
      arr[row + 2][col] = "x";
      arr[row + 3][col] = "x";
      arr[row + 4][col] = "x";
      arr[row + 4][col + 1] = "x";
      arr[row + 4][col + 2] = "x";
    }

    if (
      arr[row][col] === "x" &&
      arr[row][col + 1] === "x" &&
      arr[row][col + 2] === "x" &&
      arr[row + 1][col + 2] === "x" &&
      arr[row + 2][col + 2] === "x" &&
      arr[row + 3][col + 2] === "x" &&
      arr[row + 4][col] === "x" &&
      arr[row + 4][col + 1] === "x" &&
      arr[row + 4][col + 2] === "x"
    ) {
      arr[row][col] = ".";
      arr[row][col + 1] = ".";
      arr[row][col + 2] = ".";
      arr[row + 1][col + 2] = ".";
      arr[row + 2][col + 2] = ".";
      arr[row + 3][col + 2] = ".";
      arr[row + 4][col] = ".";
      arr[row + 4][col + 1] = ".";
      arr[row + 4][col + 2] = ".";

      if (col === M - 1) {
        findAnswer(row + 1, 0, S, C + 1);
      } else {
        findAnswer(row, col + 1, S, C + 1);
      }

      arr[row][col] = "x";
      arr[row][col + 1] = "x";
      arr[row][col + 2] = "x";
      arr[row + 1][col + 2] = "x";
      arr[row + 2][col + 2] = "x";
      arr[row + 3][col + 2] = "x";
      arr[row + 4][col] = "x";
      arr[row + 4][col + 1] = "x";
      arr[row + 4][col + 2] = "x";
    }
  }

  if (row + 2 < N && col + 4 < M) {
    if (
      arr[row][col] === "x" &&
      arr[row][col + 2] === "x" &&
      arr[row][col + 3] === "x" &&
      arr[row][col + 4] === "x" &&
      arr[row + 1][col] === "x" &&
      arr[row + 1][col + 2] === "x" &&
      arr[row + 1][col + 4] === "x" &&
      arr[row + 2][col] === "x" &&
      arr[row + 2][col + 1] === "x" &&
      arr[row + 2][col + 2] === "x" &&
      arr[row + 2][col + 4] === "x"
    ) {
      arr[row][col] = ".";
      arr[row][col + 2] = ".";
      arr[row][col + 3] = ".";
      arr[row][col + 4] = ".";
      arr[row + 1][col] = ".";
      arr[row + 1][col + 2] = ".";
      arr[row + 1][col + 4] = ".";
      arr[row + 2][col] = ".";
      arr[row + 2][col + 1] = ".";
      arr[row + 2][col + 2] = ".";
      arr[row + 2][col + 4] = ".";

      if (col === M - 1) {
        findAnswer(row + 1, 0, S + 1, C);
      } else {
        findAnswer(row, col + 1, S + 1, C);
      }

      arr[row][col] = "x";
      arr[row][col + 2] = "x";
      arr[row][col + 3] = "x";
      arr[row][col + 4] = "x";
      arr[row + 1][col] = "x";
      arr[row + 1][col + 2] = "x";
      arr[row + 1][col + 4] = "x";
      arr[row + 2][col] = "x";
      arr[row + 2][col + 1] = "x";
      arr[row + 2][col + 2] = "x";
      arr[row + 2][col + 4] = "x";
    }

    if (
      arr[row][col] === "x" &&
      arr[row][col + 1] === "x" &&
      arr[row][col + 2] === "x" &&
      arr[row][col + 3] === "x" &&
      arr[row][col + 4] === "x" &&
      arr[row + 1][col] === "x" &&
      arr[row + 1][col + 4] === "x" &&
      arr[row + 2][col] === "x" &&
      arr[row + 2][col + 4] === "x"
    ) {
      arr[row][col] = ".";
      arr[row][col + 1] = ".";
      arr[row][col + 2] = ".";
      arr[row][col + 3] = ".";
      arr[row][col + 4] = ".";
      arr[row + 1][col] = ".";
      arr[row + 1][col + 4] = ".";
      arr[row + 2][col] = ".";
      arr[row + 2][col + 4] = ".";

      if (col === M - 1) {
        findAnswer(row + 1, 0, S, C + 1);
      } else {
        findAnswer(row, col + 1, S, C + 1);
      }

      arr[row][col] = "x";
      arr[row][col + 1] = "x";
      arr[row][col + 2] = "x";
      arr[row][col + 3] = "x";
      arr[row][col + 4] = "x";
      arr[row + 1][col] = "x";
      arr[row + 1][col + 4] = "x";
      arr[row + 2][col] = "x";
      arr[row + 2][col + 4] = "x";
    }

    if (
      arr[row][col] === "x" &&
      arr[row][col + 4] === "x" &&
      arr[row + 1][col] === "x" &&
      arr[row + 1][col + 4] === "x" &&
      arr[row + 2][col] === "x" &&
      arr[row + 2][col + 1] === "x" &&
      arr[row + 2][col + 2] === "x" &&
      arr[row + 2][col + 3] === "x" &&
      arr[row + 2][col + 4] === "x"
    ) {
      arr[row][col] = ".";
      arr[row][col + 4] = ".";
      arr[row + 1][col] = ".";
      arr[row + 1][col + 4] = ".";
      arr[row + 2][col] = ".";
      arr[row + 2][col + 1] = ".";
      arr[row + 2][col + 2] = ".";
      arr[row + 2][col + 3] = ".";
      arr[row + 2][col + 4] = ".";

      if (col === M - 1) {
        findAnswer(row + 1, 0, S, C + 1);
      } else {
        findAnswer(row, col + 1, S, C + 1);
      }

      arr[row][col] = "x";
      arr[row][col + 4] = "x";
      arr[row + 1][col] = "x";
      arr[row + 1][col + 4] = "x";
      arr[row + 2][col] = "x";
      arr[row + 2][col + 1] = "x";
      arr[row + 2][col + 2] = "x";
      arr[row + 2][col + 3] = "x";
      arr[row + 2][col + 4] = "x";
    }
  }
};

findAnswer(0, 0, 0, 0);

console.log(answer[0], answer[1]);