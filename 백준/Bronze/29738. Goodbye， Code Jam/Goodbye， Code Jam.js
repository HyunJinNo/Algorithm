const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 개수, 1 <= T <= 100
let answer = "";

for (let i = 1; i <= T; i++) {
  const N = Number(input[i]); // 1 <= N <= 30_000

  if (N <= 25) {
    answer += `Case #${i}: World Finals\n`;
  } else if (N <= 1000) {
    answer += `Case #${i}: Round 3\n`;
  } else if (N <= 4500) {
    answer += `Case #${i}: Round 2\n`;
  } else {
    answer += `Case #${i}: Round 1\n`;
  }
}

console.log(answer.trim());