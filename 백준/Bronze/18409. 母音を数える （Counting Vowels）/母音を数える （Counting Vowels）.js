const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]);
const S = input[1].trim();
let answer = 0;

for (let i = 0; i < N; i++) {
  if (["a", "e", "i", "o", "u"].includes(S[i])) {
    answer++;
  }
}

console.log(answer);
