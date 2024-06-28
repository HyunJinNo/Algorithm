const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

// N: 싸움 시간, 1 <= N <= 10_000
// M: 스킬의 시전 시간, 2 <= M <= 100
const [N, M] = input.split(" ").map(Number);
const cache = Array(N + 1).fill(-1);

const solve = (time) => {
  if (time === 0) {
    cache[time] = 1;
    return 1;
  } else if (cache[time] !== -1) {
    return cache[time];
  }

  let result = solve(time - 1);
  if (time - M >= 0) {
    result += solve(time - M);
    result %= 1000000007;
  }
  cache[time] = result;
  return result;
};

console.log(solve(N));
