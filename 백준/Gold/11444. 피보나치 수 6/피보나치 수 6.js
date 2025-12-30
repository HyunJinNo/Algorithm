const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();

const MOD = 1_000_000_007n;
const N = BigInt(input); // 1 <= N <= 10¹⁸
const cache = new Map();

/**
 * @param {BigInt} n
 */
const fibo = (n) => {
  if (n === 0n) {
    return 0n;
  } else if (n === 1n) {
    return 1n;
  } else if (n === 2n) {
    return 1n;
  } else if (cache.has(n)) {
    return cache.get(n);
  } else {
    if (n % 2n === 1n) {
      const m = (n + 1n) / 2n;
      const value = (fibo(m) * fibo(m) + fibo(m - 1n) * fibo(m - 1n)) % MOD;
      cache.set(n, value);
      return value;
    } else {
      const m = n / 2n;
      const value = ((2n * fibo(m - 1n) + fibo(m)) * fibo(m)) % MOD;
      cache.set(n, value);
      return value;
    }
  }
};

console.log(fibo(N).toString());