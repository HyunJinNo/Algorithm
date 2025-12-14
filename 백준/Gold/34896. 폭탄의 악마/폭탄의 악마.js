const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]); // 폭탄의 수, 2 <= N <= 200_000
const X = input[1].split(" ").map(Number); // -100_000_000 <= X[i] <= 100_000_000
const C = input[2].split(" ").map(Number); // 1 <= C[i] <= 10_000
const B = Number(input[3]); // B < 10_000_000
const arr = [];

for (let i = 0; i < N; i++) {
  arr.push({ position: X[i], cost: C[i] });
}

arr.sort((a, b) => a.position - b.position);

/**
 * @param {Number} R
 * @returns {boolean}
 */
const check = (R) => {
  let sum = 0;
  let minCost = arr[0].cost;
  let index = 1;

  while (index < N) {
    if (arr[index].position - arr[index - 1].position <= R) {
      minCost = Math.min(minCost, arr[index].cost);
    } else {
      sum += minCost;
      minCost = arr[index].cost;
    }

    index++;
  }

  sum += minCost;

  return sum <= B;
};

let left = 0;
let right = 200_000_000;

while (left + 1 < right) {
  const mid = Math.floor((left + right) / 2);

  if (check(mid)) {
    right = mid;
  } else {
    left = mid;
  }
}

console.log(right);