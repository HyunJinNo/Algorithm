const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]); // 전봇대의 수, 1 <= N <= 100_000
const x = input[1].split(" ").map(Number); // 1 <= x[i] <= 1_000_000_000

let left = 0;
let right = x[N - 1];

const check = (x1) => {
  let result = 0;

  for (let i = 1; i < N; i++) {
    result += Math.abs(x1 * i - x[i]);
  }

  return result;
};

while (left + 2 < right) {
  const a = Math.floor((left * 2 + right) / 3);
  const b = Math.floor((left + 2 * right) / 3);

  if (check(a) < check(b)) {
    right = b;
  } else {
    left = a;
  }
}

let answer = check(left);

for (let num = left + 1; num <= right; num++) {
  answer = Math.min(answer, check(num));
}

console.log(answer);