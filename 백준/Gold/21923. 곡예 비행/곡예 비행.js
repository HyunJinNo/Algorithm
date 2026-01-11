const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 1 <= N, M <= 1_000
const [N, M] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const cache = Array.from({ length: N }, () => Array.from({ length: M }, () => Array(2).fill(-1)));

/**
 * @param {Number} row
 * @param {Number} col
 * @param {Number} flag 1: 상승 비행, 0: 하강 비행
 */
const findAnswer = (row, col, flag) => {
  if (row === N - 1 && col === M - 1 && flag === 0) {
    return arr[row][col];
  } else if (cache[row][col][flag] !== -1) {
    return cache[row][col][flag];
  }

  let result = Number.MIN_SAFE_INTEGER;

  // 상승 비행 중
  if (flag === 1) {
    // 위로 이동
    if (row > 0) {
      result = Math.max(result, arr[row][col] + findAnswer(row - 1, col, 1));
    }

    // 오른쪽으로 이동
    if (col < M - 1) {
      result = Math.max(result, arr[row][col] + findAnswer(row, col + 1, 1));
    }

    // 하강 비행으로 전환
    result = Math.max(result, arr[row][col] + findAnswer(row, col, 0));
  } else {
    // 오른쪽으로 이동
    if (col < M - 1) {
      result = Math.max(result, arr[row][col] + findAnswer(row, col + 1, 0));
    }

    // 아래로 이동
    if (row < N - 1) {
      result = Math.max(result, arr[row][col] + findAnswer(row + 1, col, 0));
    }
  }

  cache[row][col][flag] = result;
  return result;
};

console.log(findAnswer(N - 1, 0, 1));