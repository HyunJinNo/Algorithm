const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 장소의 수, 3 <= N <= 100_000
const arr = new Int16Array(input[1].split(" ").map(Number)); // 1 <= arr[i] <= 10_000
const sum = Array(N).fill(0);
sum[0] = arr[0];

for (let i = 1; i < N; i++) {
  sum[i] = sum[i - 1] + arr[i];
}

const rangeSum = (a, b) => {
  if (a === 0) {
    return sum[b];
  } else {
    return sum[b] - sum[a - 1];
  }
};

/**
 * 벌 - 벌 - 꿀통
 */
const case1 = () => {
  let result = 0;

  for (let i = 1; i < N - 1; i++) {
    result = Math.max(result, rangeSum(0, N - 1) + rangeSum(i, N - 1) - arr[0] - arr[i] * 2);
  }

  return result;
};

/**
 * 꿀통 - 벌 - 벌
 */
const case2 = () => {
  let result = 0;

  for (let i = 1; i < N - 1; i++) {
    result = Math.max(result, rangeSum(0, N - 1) * 2 - rangeSum(i, N - 1) - arr[N - 1] - arr[i]);
  }

  return result;
};

/**
 * 벌 - 꿀통 - 벌
 */
const case3 = () => {
  let result = 0;

  for (let i = 1; i < N - 1; i++) {
    result = Math.max(result, rangeSum(0, i) + rangeSum(i, N - 1) - arr[0] - arr[N - 1]);
  }

  return result;
};

console.log(Math.max(case1(), case2(), case3()));