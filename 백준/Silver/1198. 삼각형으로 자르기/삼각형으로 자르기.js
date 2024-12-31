const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 볼록 다각형 점의 수, 3 <= N <= 35
const arr = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  arr.push(new Int16Array(input[i].split(" ").map(Number)));
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const A = arr[i];
      const B = arr[j];
      const C = arr[k];

      answer = Math.max(
        answer,
        Math.abs(
          A[0] * B[1] +
            B[0] * C[1] +
            C[0] * A[1] -
            B[0] * A[1] -
            C[0] * B[1] -
            A[0] * C[1],
        ) / 2,
      );
    }
  }
}

console.log(answer);
