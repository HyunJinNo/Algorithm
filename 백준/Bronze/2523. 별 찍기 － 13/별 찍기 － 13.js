const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
const N = Number(input); // 1 <= N <= 100
let answer = "";

for (let i = 1; i <= N; i++) {
  answer += `${"*".repeat(i)}\n`;
}

for (let i = N - 1; i >= 1; i--) {
  answer += `${"*".repeat(i)}\n`;
}

console.log(answer.trim());