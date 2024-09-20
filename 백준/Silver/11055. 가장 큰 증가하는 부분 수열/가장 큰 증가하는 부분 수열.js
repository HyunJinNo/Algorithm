const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 수열 A의 크기, 1 <= N <= 1_000
const A = input[1].trim().split(" ").map(Number);

const cache = Array(N).fill(-1);

const solve = (index) => {
  if (cache[index] !== -1) {
    return cache[index];
  }

  let result = 0;

  for (let i = index + 1; i < N; i++) {
    if (A[index] < A[i]) {
      result = Math.max(result, A[i] + solve(i));
    }
  }

  cache[index] = result;
  return result;
};

let answer = 0;
for (let i = 0; i < N; i++) {
  answer = Math.max(answer, A[i] + solve(i));
}
console.log(answer);
