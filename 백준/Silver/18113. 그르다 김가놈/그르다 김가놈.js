const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 김밥의 개수, 1 <= N <= 1_000_000
// K: 꼬다리의 길이, 1 <= K <= 1_000_000_000
// M: 김밥조각의 최소 개수, 1 <= M <= 1_000_000_000
const [N, K, M] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= N; i++) {
  const L = Number(input[i]); // 1 <= L <= 1_000_000_000

  if (L === 2 * K || L <= K) {
    continue;
  } else if (L > 2 * K) {
    arr.push(L - 2 * K);
  } else {
    arr.push(L - K);
  }
}

if (arr.length === 0 || arr.reduce((total, current) => total + current, 0) < M) {
  console.log(-1);
  process.exit(0);
}

const check = (P) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += Math.floor(arr[i] / P);
  }

  return count >= M;
};

let left = 1;
let right = 1_000_000_001;

while (left + 1 < right) {
  const mid = Math.floor((left + right) / 2);

  if (check(mid)) {
    left = mid;
  } else {
    right = mid;
  }
}

console.log(left);