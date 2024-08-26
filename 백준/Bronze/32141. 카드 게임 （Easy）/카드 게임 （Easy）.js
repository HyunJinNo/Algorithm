const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 카드의 수, 1 <= N <= 1_000_000
// H: 상대의 체력, 1 <= H <= 1_000_000
let [N, H] = input[0].trim().split(" ").map(Number);
const d = new Int32Array(input[1].trim().split(" ").map(Number));

let answer = 0;
d.sort((a, b) => a - b);

for (let i = 0; i < d.length; i++) {
  H -= d[i];
  answer++;

  if (H <= 0) {
    break;
  }
}

if (H > 0) {
  console.log(-1);
} else {
  console.log(answer);
}