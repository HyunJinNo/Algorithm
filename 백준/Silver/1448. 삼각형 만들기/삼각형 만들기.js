const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 빨대의 개수, 3 <= N <= 1_000_000
const arr = [];
let answer = -1;

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i])); // 1 <= arr[i] <= 1_000_000
}

arr.sort((a, b) => a - b);

for (let i = N - 1; i >= 2; i--) {
  if (arr[i] < arr[i - 1] + arr[i - 2]) {
    answer = arr[i] + arr[i - 1] + arr[i - 2];
    break;
  }
}

console.log(answer);