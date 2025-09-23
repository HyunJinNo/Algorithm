const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 1 <= N <= 100
let answer = "";

for (let i = 0; i < N; i++) {
  answer += " ".repeat(i);
  answer += "*".repeat((N - i) * 2 - 1);
  answer += "\n";
}

for (let i = 1; i < N; i++) {
  answer += " ".repeat(N - i - 1);
  answer += "*".repeat(i * 2 + 1);
  answer += "\n";
}

console.log(answer.trim());