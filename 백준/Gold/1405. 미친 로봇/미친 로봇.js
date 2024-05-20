const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

// 1 <= N <= 14
// 0 <= arr[i] <= 100, sum(arr[i]) = 100
const [N, ...arr] = input.split(" ").map(Number);
let answer = 0;
const visited = Array.from(Array(29), () => Array(29).fill(false));
visited[14][14] = true;

const solve = (n, row, col) => {
  if (n > N) {
    return 1;
  }

  let result = 0;

  if (!visited[row][col + 1]) {
    visited[row][col + 1] = true;
    result += arr[0] * solve(n + 1, row, col + 1);
    visited[row][col + 1] = false;
  }

  if (!visited[row][col - 1]) {
    visited[row][col - 1] = true;
    result += arr[1] * solve(n + 1, row, col - 1);
    visited[row][col - 1] = false;
  }

  if (!visited[row + 1][col]) {
    visited[row + 1][col] = true;
    result += arr[2] * solve(n + 1, row + 1, col);
    visited[row + 1][col] = false;
  }

  if (!visited[row - 1][col]) {
    visited[row - 1][col] = true;
    result += arr[3] * solve(n + 1, row - 1, col);
    visited[row - 1][col] = false;
  }

  return result / 100;
};

console.log(solve(1, 14, 14));
