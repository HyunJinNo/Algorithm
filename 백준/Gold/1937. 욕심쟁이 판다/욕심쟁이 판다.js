const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const n = Number(input[0]); // 대나무 숲의 크기, 1 <= n <= 500
const arr = [];
const cache = Array.from(Array(n), () => Array(n).fill(-1));

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

/**
 * @param {number} row
 * @param {number} col
 */
const solution = (row, col) => {
  if (cache[row][col] !== -1) {
    return cache[row][col];
  }

  let result = 0;

  if (row - 1 >= 0 && arr[row][col] < arr[row - 1][col]) {
    result = Math.max(result, 1 + solution(row - 1, col));
  }

  if (row + 1 < n && arr[row][col] < arr[row + 1][col]) {
    result = Math.max(result, 1 + solution(row + 1, col));
  }

  if (col - 1 >= 0 && arr[row][col] < arr[row][col - 1]) {
    result = Math.max(result, 1 + solution(row, col - 1));
  }

  if (col + 1 < n && arr[row][col] < arr[row][col + 1]) {
    result = Math.max(result, 1 + solution(row, col + 1));
  }

  cache[row][col] = result;
  return result;
};

let answer = 0;
for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
    answer = Math.max(answer, 1 + solution(row, col));
  }
}

console.log(answer);
