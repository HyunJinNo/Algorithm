const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ");
let answer = 1;

for (let i = 1; i < N; i++) {
  const S = arr[i].trim();
  if (S[0] !== arr[0][0]) {
    answer = 0;
    break;
  }
}

console.log(answer);
