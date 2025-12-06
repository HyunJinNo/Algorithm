const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]); // 게임 구역 크기, 2 <= N <= 3
const arr = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));

const findAnswer = (row, col) => {
  if (row === N - 1 && col === N - 1) {
    return 1;
  } else if (arr[row][col] === 0) {
    return 0;
  }

  let result = 0;

  if (row + arr[row][col] < N) {
    result = Math.max(result, findAnswer(row + arr[row][col], col));
  }

  if (col + arr[row][col] < N) {
    result = Math.max(result, findAnswer(row, col + arr[row][col]));
  }

  arr[row][col] = 0; // 방문 처리

  return result;
};

console.log(findAnswer(0, 0) === 1 ? "HaruHaru" : "Hing");