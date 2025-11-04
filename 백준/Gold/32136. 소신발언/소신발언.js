const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // N마리의 소, 2 <= N <= 300_000
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 500_000

const getTime = (i) => {
  let result = 0;

  for (let j = 0; j < N; j++) {
    result = Math.max(result, Math.abs(i - j) * arr[j]);
  }

  return result;
};

let left = -1;
let right = N;

while (right - left > 2) {
  const a = Math.floor((2 * left + right) / 3);
  const b = Math.floor((left + 2 * right) / 3);

  if (getTime(a) < getTime(b)) {
    right = b;
  } else {
    left = a;
  }
}

let answer = getTime(left);

for (let num = left + 1; num <= right; num++) {
  answer = Math.min(answer, getTime(num));
}

console.log(answer);