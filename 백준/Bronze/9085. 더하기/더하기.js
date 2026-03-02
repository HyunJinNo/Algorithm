const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 개수, 1 <= T <= 10
let index = 1;
let answer = "";

for (let iter = 0; iter < T; iter++) {
  const N = Number(input[index++]); // 자연수의 개수, 1 <= N <= 100
  const arr = input[index++].split(" ").map(Number);
  answer += `${arr.reduce((total, current) => total + current, 0)}\n`;
}

console.log(answer.trim());