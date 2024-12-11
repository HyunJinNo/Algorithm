const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 수

for (let i = 1; i <= T; i++) {
  const n = Number(input[3 * (i - 1) + 1]); // 1 <= n <= 100_000
  const arr = [];
  arr.push(input[3 * (i - 1) + 2].split(" ").map(Number));
  arr.push(input[3 * i].split(" ").map(Number));
  arr[0][1] += arr[1][0];
  arr[1][1] += arr[0][0];

  for (let j = 2; j < n; j++) {
    arr[0][j] += Math.max(arr[1][j - 1], arr[0][j - 2], arr[1][j - 2]);
    arr[1][j] += Math.max(arr[0][j - 1], arr[0][j - 2], arr[1][j - 2]);
  }

  console.log(Math.max(arr[0][n - 1], arr[1][n - 1]));
}