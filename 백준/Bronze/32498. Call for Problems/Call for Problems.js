const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]);
let answer = 0;

for (let i = 1; i <= n; i++) {
  if (Number(input[i]) % 2 === 1) {
    answer++;
  }
}

console.log(answer);
