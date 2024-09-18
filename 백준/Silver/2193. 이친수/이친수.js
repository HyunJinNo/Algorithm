const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 1 <= N <= 90

const cache = Array.from(Array(N + 1), () => Array(2).fill(-1n));

const solve = (length, lastNum) => {
  if (length === N) {
    cache[length][lastNum] = 1n;
    return 1n;
  } else if (cache[length][lastNum] !== -1n) {
    return cache[length][lastNum];
  }

  let result = 0n;

  if (lastNum === 1) {
    result = solve(length + 1, 0);
  } else {
    result = solve(length + 1, 0) + solve(length + 1, 1);
  }

  cache[length][lastNum] = result;
  return result;
};

if (N === 1) {
  console.log(1);
} else {
  console.log(solve(1, 1).toString());
}
