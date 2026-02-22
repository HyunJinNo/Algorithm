const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 카드의 개수, 1 <= N <= 33
const arr = input[1].split(" ").map(Number);
let answer = arr[0];
let currentValue = arr[0];

for (let i = 1; i < N; i++) {
  if (arr[i] - currentValue > 1) {
    answer += arr[i];
  }

  currentValue = arr[i];
}

console.log(answer);