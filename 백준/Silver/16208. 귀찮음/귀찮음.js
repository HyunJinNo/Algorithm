const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 쇠막대의 수, 1 <= n <= 500_000
const a = input[1].trim().split(" ").map(Number); // 1 <= a[i] <= 101
let num = a.reduce((total, current) => total + current, 0);
let answer = 0;

a.sort((num1, num2) => num1 - num2);

a.forEach((value) => {
  num -= value;
  answer += value * num;
});

console.log(answer);
