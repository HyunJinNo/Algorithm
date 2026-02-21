const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 개수
let answer = "";

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(",").map(Number);
  answer += `${A + B}\n`;
}

console.log(answer.trim());