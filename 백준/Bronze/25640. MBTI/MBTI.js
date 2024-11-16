const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const mbti = input[0].trim();
const N = Number(input[1]);
let answer = 0;

for (let i = 2; i < 2 + N; i++) {
  if (input[i].trim() === mbti) {
    answer++;
  }
}

console.log(answer);