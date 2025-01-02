const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 레벨의 수, 1 <= N <= 100
const arr = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

for (let i = N - 2; i >= 0; i--) {
  if (arr[i] >= arr[i + 1]) {
    answer += arr[i] - arr[i + 1] + 1;
    arr[i] = arr[i + 1] - 1;
  }
}

console.log(answer);
