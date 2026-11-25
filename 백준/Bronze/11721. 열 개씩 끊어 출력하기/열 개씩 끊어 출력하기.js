const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().trim();
const N = input.length; // 문자열의 길이, 1 <= N <= 100
let answer = "";

for (let i = 0; i < Math.ceil(N / 10); i++) {
  answer += input.slice(i * 10, (i + 1) * 10);
  answer += "\n";
}

console.log(answer.trim());