const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 배열의 크기, 1 <= N <-= 50
const A = input[1].split(" ").map(Number);
let S = Number(input[2]); // 0 <= S <= 1_000_000_000
let index = 0;

while (index < N && S > 0) {
  let maxNum = -1;
  let maxIndex = -1;

  for (let i = index; i < Math.min(N, index + S + 1); i++) {
    if (A[i] > maxNum) {
      maxNum = A[i];
      maxIndex = i;
    }
  }

  for (let i = maxIndex; i >= index + 1; i--) {
    A[i] = A[i - 1];
  }

  S -= maxIndex - index;
  A[index++] = maxNum;
}

console.log(A.join(" ").trim());