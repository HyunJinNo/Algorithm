const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 1 <= N <= 10
let answer = "";

for (let i = 0; i < N; i++) {
  answer += "LoveisKoreaUniversity ";
}

console.log(answer.trim());
