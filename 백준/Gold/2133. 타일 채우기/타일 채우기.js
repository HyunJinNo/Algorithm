const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

const N = Number(input); // 1 <= N <= 30
const cache = Array(N + 1).fill(0);

const solve = (len) => {
  if (len % 2 === 1) {
    return 0;
  }

  if (len === 0) {
    cache[0] = 1;
    return cache[0];
  } else if (cache[len] !== 0) {
    return cache[len];
  }

  let result = solve(len - 2) * 3;
  for (let i = len - 4; i >= 0; i -= 2) {
    result += solve(i) * 2;
  }

  cache[len] = result;
  return result;
};

console.log(solve(N));
