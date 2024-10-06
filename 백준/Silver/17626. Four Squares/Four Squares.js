const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const n = Number(input); // 1 <= n <= 50_000
const cache = Array.from({ length: n + 1 }, () => 0);

const solve = (num) => {
  if (cache[num] !== 0) {
    return cache[num];
  } else if (num === 0) {
    return 0;
  }

  let result = Number.MAX_SAFE_INTEGER;
  for (let i = Math.floor(Math.sqrt(num)); i >= 1; i--) {
    result = Math.min(result, 1 + solve(num - i * i));
  }

  cache[num] = result;
  return result;
};

console.log(solve(n));
