const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 팬의 수, 1 <= N <= 100_000
const arr = input.slice(1).map((str) => str.split(" ").map(Number));
let start = 100_001;
let end = 0;

for (let i = 0; i < N; i++) {
  start = Math.min(start, arr[i][1]);
  end = Math.max(end, arr[i][0]);
}

console.log(end - start < 0 ? 0 : end - start);
