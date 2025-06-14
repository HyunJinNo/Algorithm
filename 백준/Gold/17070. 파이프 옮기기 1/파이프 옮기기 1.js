const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 집의 크기, 3 <= N <= 16
const arr = [];
const cache = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => Array(3).fill(-1)),
);

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

/**
 *
 * @param {number} row
 * @param {number} col
 * @param {number} direction 0: "RIGHT", 1: "DOWN", 2: "DIAGONAL"
 */
const findAnswer = (row, col, direction) => {
  if (row >= N || col >= N) {
    return 0;
  } else if (row === N - 1 && col === N - 1) {
    return 1;
  } else if (cache[row][col][direction] !== -1) {
    return cache[row][col][direction];
  }

  let result = 0;

  switch (direction) {
    case 0:
      if (col + 1 < N && arr[row][col + 1] === 0) {
        result += findAnswer(row, col + 1, 0);
      }
      if (
        row + 1 < N &&
        col + 1 < N &&
        arr[row][col + 1] === 0 &&
        arr[row + 1][col] === 0 &&
        arr[row + 1][col + 1] === 0
      ) {
        result += findAnswer(row + 1, col + 1, 2);
      }
      break;
    case 1:
      if (row + 1 < N && arr[row + 1][col] === 0) {
        result += findAnswer(row + 1, col, 1);
      }
      if (
        row + 1 < N &&
        col + 1 < N &&
        arr[row][col + 1] === 0 &&
        arr[row + 1][col] === 0 &&
        arr[row + 1][col + 1] === 0
      ) {
        result += findAnswer(row + 1, col + 1, 2);
      }
      break;
    case 2:
      if (col + 1 < N && arr[row][col + 1] === 0) {
        result += findAnswer(row, col + 1, 0);
      }
      if (row + 1 < N && arr[row + 1][col] === 0) {
        result += findAnswer(row + 1, col, 1);
      }
      if (
        row + 1 < N &&
        col + 1 < N &&
        arr[row][col + 1] === 0 &&
        arr[row + 1][col] === 0 &&
        arr[row + 1][col + 1] === 0
      ) {
        result += findAnswer(row + 1, col + 1, 2);
      }
      break;
    default:
      break;
  }

  cache[row][col][direction] = result;
  return result;
};

console.log(findAnswer(0, 1, 0));
