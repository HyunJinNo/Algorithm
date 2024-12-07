const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number); // 1 <= N, M <= 1_000_000
const A = new Int32Array(input[1].split(" ").map(Number));
const B = new Int32Array(input[2].split(" ").map(Number));
let answer = "";

let i = 0;
let j = 0;

while (i < N || j < M) {
  if (i >= N) {
    answer += `${B[j++]} `;
    continue;
  }

  if (j >= M) {
    answer += `${A[i++]} `;
    continue;
  }

  if (A[i] < B[j]) {
    answer += `${A[i++]} `;
  } else {
    answer += `${B[j++]} `;
  }
}

console.log(answer);
