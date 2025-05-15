const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 1 <= N <= 100_000
const arr = input.slice(1).map((str) => str.split(" ").map(Number));
const maxArr = Array.from({ length: N }, () => Array(3).fill(0));
const minArr = Array.from({ length: N }, () => Array(3).fill(0));
maxArr[0] = [...arr[0]];
minArr[0] = [...arr[0]];

for (let i = 1; i < N; i++) {
  maxArr[i][0] = arr[i][0] + Math.max(maxArr[i - 1][0], maxArr[i - 1][1]);
  maxArr[i][1] =
    arr[i][1] + Math.max(maxArr[i - 1][0], maxArr[i - 1][1], maxArr[i - 1][2]);
  maxArr[i][2] = arr[i][2] + Math.max(maxArr[i - 1][1], maxArr[i - 1][2]);

  minArr[i][0] = arr[i][0] + Math.min(minArr[i - 1][0], minArr[i - 1][1]);
  minArr[i][1] =
    arr[i][1] + Math.min(minArr[i - 1][0], minArr[i - 1][1], minArr[i - 1][2]);
  minArr[i][2] = arr[i][2] + Math.min(minArr[i - 1][1], minArr[i - 1][2]);
}

console.log(`${Math.max(...maxArr[N - 1])} ${Math.min(...minArr[N - 1])}`);
