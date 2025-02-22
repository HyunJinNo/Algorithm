const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const [A, B] = input.split(" ").map((str) => str.trim());
const lenA = A.length;
const lenB = B.length;
let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < lenB - lenA + 1; i++) {
  let count = 0;

  for (let j = 0; j < lenA; j++) {
    if (A[j] !== B[i + j]) {
      count++;
    }
  }

  answer = Math.min(answer, count);
}

console.log(answer);
