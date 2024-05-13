const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 가로의 길이, 1 <= N <= 600
// M: 세로의 길이, 1 <= M <= 600
const [N, M] = input[0].split(" ").map(Number);
const visited = Array.from(Array(N), () => Array(M).fill(false));
const map = [];

let answer = 0;

for (let i = 1; i <= N; i++) {
  map.push(input[i].trim());
}

const solve = (row, col) => {
  if (map[row][col] === "P") {
    answer++;
  }

  if (row - 1 >= 0 && map[row - 1][col] !== "X" && !visited[row - 1][col]) {
    visited[row - 1][col] = true;
    solve(row - 1, col);
  }
  if (row + 1 < N && map[row + 1][col] !== "X" && !visited[row + 1][col]) {
    visited[row + 1][col] = true;
    solve(row + 1, col);
  }
  if (col - 1 >= 0 && map[row][col - 1] !== "X" && !visited[row][col - 1]) {
    visited[row][col - 1] = true;
    solve(row, col - 1);
  }
  if (col + 1 < M && map[row][col + 1] !== "X" && !visited[row][col + 1]) {
    visited[row][col + 1] = true;
    solve(row, col + 1);
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "I") {
      solve(i, j);
      break;
    }
  }
}

console.log(answer === 0 ? "TT" : answer);
