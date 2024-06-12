const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const [A, B] = input.split(" ").map(Number);
let answer = "";

const min = Math.min(A, B);
const max = Math.max(A, B);
for (let num = min + 1; num < max; num++) {
  answer += `${num} `;
}

if (max - min - 1 <= 0) {
  console.log(0);
} else {
  console.log(max - min - 1);
}

console.log(answer);
