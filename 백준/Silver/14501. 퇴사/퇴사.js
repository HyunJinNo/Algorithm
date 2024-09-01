const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 남은 N일, 1 <= N <= 15
const T = [];
const P = [];

for (let i = 1; i <= N; i++) {
  const temp = input[i].trim().split(" ").map(Number);
  T.push(temp[0]);
  P.push(temp[1]);
}

const cache = Array(N).fill(-1);

const solve = (index) => {
  if (index >= N) {
    return 0;
  } else if (cache[index] !== -1) {
    return cache[index];
  }

  let result = 0;

  for (let i = index; i < N; i++) {
    if (i + T[i] <= N) {
      result = Math.max(result, solve(i + T[i]) + P[i]);
    }
  }

  cache[index] = result;
  return result;
};

console.log(solve(0));
