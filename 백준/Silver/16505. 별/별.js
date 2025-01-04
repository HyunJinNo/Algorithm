const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const N = Number(input); // 0 <= N <= 10
const length = Math.pow(2, N);
const arr = Array.from({ length }, () => Array(length).fill(" "));

/**
 * @param {number} row
 * @param {number} col
 * @param {number} length
 */
const solution = (row, col, length) => {
  if (length === 1) {
    arr[row][col] = "*";
  } else {
    solution(row, col, length / 2);
    solution(row + length / 2, col, length / 2);
    solution(row, col + length / 2, length / 2);
  }
};

solution(0, 0, Math.pow(2, N));

let answer = "";

for (let i = 0; i < length; i++) {
  let str = "";
  for (let j = 0; j < length; j++) {
    str += arr[i][j];
  }

  answer += `${str.trim()}\n`;
}

process.stdout.write(answer.trim());
