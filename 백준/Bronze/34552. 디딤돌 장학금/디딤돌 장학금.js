const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const M = input[0].split(" ").map(Number);
const N = Number(input[1]); // 재학생의 수, 1 <= N <= 1_000
let answer = 0;

for (let i = 2; i < 2 + N; i++) {
  const [B, L, S] = input[i].split(" ").map(Number);

  if (L >= 2 && S >= 17) {
    answer += M[B];
  }
}

console.log(answer);