const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 사람의 수, 1 <= N <= 100
let answer = 0;

for (let i = 1; i <= N; i++) {
  answer += input[i].trim().length;
}

console.log(answer);
