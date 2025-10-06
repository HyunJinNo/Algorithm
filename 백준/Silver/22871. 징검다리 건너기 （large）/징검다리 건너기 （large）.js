const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 2 <= N <= 5_000
const A = input[1].split(" ").map(Number); // 1 <= A[i] <= 1_000_000

let left = 0;
let right = N * 1_000_000;

const check = (K) => {
  const stack = [0];
  const visited = Array(N).fill(false);
  visited[0] = true;

  while (stack.length !== 0) {
    const index = stack.pop();

    if (index === N - 1) {
      return true;
    }

    for (let i = Math.min(N - 1, index + K); i > index; i--) {
      if (!visited[i] && (i - index) * (1 + Math.abs(A[index] - A[i])) <= K) {
        stack.push(i);
        visited[i] = true;
      }
    }
  }

  return false;
};

while (left + 1 < right) {
  const mid = Math.floor((left + right) / 2);

  if (check(mid)) {
    right = mid;
  } else {
    left = mid;
  }
}

console.log(right);