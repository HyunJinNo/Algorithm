const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 1 <= N <= 1_000
const arr = [];
let sum = 0;

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    sum += arr[row][col];
  }
}

const check = (mid) => {
  let count = 0;

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      count += Math.min(arr[row][col], mid);
    }
  }

  return count >= sum / 2;
};

let left = -1;
let right = 10_000_000;

while (left + 1 < right) {
  const mid = Math.floor((left + right) / 2);

  if (check(mid)) {
    right = mid;
  } else {
    left = mid;
  }
}

console.log(right);