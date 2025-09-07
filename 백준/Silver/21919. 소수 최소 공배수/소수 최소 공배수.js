const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 1 <= N <= 10_000
const A = input[1].split(" ").map(Number); // 2 <= A[i] <= 1_000_000

const isPrime = Array(1_000_001).fill(false);
const visited = Array(1_000_001).fill(false);
isPrime[2] = true;
visited[2] = true;

for (let x = 3; x <= 1_000_000; x += 2) {
  if (visited[x]) {
    continue;
  }

  let flag = true;

  for (let y = 2; y <= Math.floor(Math.sqrt(x)); y++) {
    if (x % y === 0) {
      flag = false;
      break;
    }
  }

  isPrime[x] = flag;
  visited[x] = true;

  let multiplier = x;
  while (x * multiplier <= 1_000_000) {
    isPrime[x * multiplier] = false;
    visited[x * multiplier] = true;
    multiplier++;
  }
}

const arr = [...new Set(A)].filter((value) => isPrime[value]);
console.log(arr.length === 0 ? -1 : arr.reduce((total, current) => total * BigInt(current), 1n).toString());