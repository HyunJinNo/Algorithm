const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 키우기를 원하는 고양이의 수, 0 <= N <= 1_000_000_000_000

if (N === 0) {
  console.log(0);
  process.exit();
}

let answer = 1;
let count = 1;

while (count < N) {
  count *= 2;
  answer++;
}

console.log(answer);
