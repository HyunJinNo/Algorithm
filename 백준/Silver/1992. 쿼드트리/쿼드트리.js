const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 영상의 크기, 1 <= N <= 64
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].trim().split(""));
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} length
 * @returns {string}
 */
const solution = (row, col, length) => {
  if (length === 1) {
    return `${arr[row][col]}`;
  }

  if (length === 2) {
    if (
      arr[row][col] === "0" &&
      arr[row][col + 1] === "0" &&
      arr[row + 1][col] === "0" &&
      arr[row + 1][col + 1] === "0"
    ) {
      return "0";
    } else if (
      arr[row][col] === "1" &&
      arr[row][col + 1] === "1" &&
      arr[row + 1][col] === "1" &&
      arr[row + 1][col + 1] === "1"
    ) {
      return "1";
    } else {
      return `(${arr[row][col]}${arr[row][col + 1]}${arr[row + 1][col]}${
        arr[row + 1][col + 1]
      })`;
    }
  }

  const a = solution(row, col, length / 2);
  const b = solution(row, col + length / 2, length / 2);
  const c = solution(row + length / 2, col, length / 2);
  const d = solution(row + length / 2, col + length / 2, length / 2);

  if (a === "0" && b === "0" && c === "0" && d === "0") {
    return "0";
  } else if (a === "1" && b === "1" && c === "1" && d === "1") {
    return "1";
  } else {
    return `(${a}${b}${c}${d})`;
  }
};

console.log(solution(0, 0, N));
