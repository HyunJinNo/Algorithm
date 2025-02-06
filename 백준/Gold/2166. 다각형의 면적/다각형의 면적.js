const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

let answer = 0;
const N = Number(input[0]); // 3 <= N <= 10_000
const points = input.slice(1).map((str) => str.split(" ").map(Number));

for (let i = 1; i < N - 1; i++) {
  const ax = points[i][0] - points[0][0];
  const ay = points[i][1] - points[0][1];
  const bx = points[i + 1][0] - points[i][0];
  const by = points[i + 1][1] - points[i][1];

  answer += (ax * by - bx * ay) / 2;
}

console.log(Math.abs(answer).toFixed(1));
