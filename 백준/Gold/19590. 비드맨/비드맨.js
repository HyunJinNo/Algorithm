const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]); // 구슬의 종류, 1 <= N <= 100_000
const x = [];
let sum = 0;
let maxNum = 0;

for (let i = 1; i <= N; i++) {
  const num = Number(input[i]); // 1 <= x[i] <= 1_000_000_000
  sum += num;
  maxNum = Math.max(maxNum, num);
  x.push(num);
}

if (maxNum >= sum - maxNum) {
  console.log(maxNum - (sum - maxNum));
} else {
  console.log(sum % 2);
}