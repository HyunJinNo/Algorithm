const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 고객의 수, 1 <= n <= 100_000
const arr1 = [];
const arr2 = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  arr1.push(x);
  arr2.push(y);
}

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

const middleX = arr1[Math.floor(n / 2)];
const middleY = arr2[Math.floor(n / 2)];
const answer =
  arr1.reduce((total, current) => total + Math.abs(middleX - current), 0) +
  arr2.reduce((total, current) => total + Math.abs(middleY - current), 0);
console.log(answer);
