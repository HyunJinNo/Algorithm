const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 개수, 1 <= T <= 100
let answer = "";

for (let i = 1; i <= T; i++) {
  const [A, B, C] = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (A + B <= C) {
    answer += `Case #${i}: invalid!\n`;
  } else if (A === B && B === C) {
    answer += `Case #${i}: equilateral\n`;
  } else if (A === B || A === C || B === C) {
    answer += `Case #${i}: isosceles\n`;
  } else {
    answer += `Case #${i}: scalene\n`;
  }
}

console.log(answer.trim());