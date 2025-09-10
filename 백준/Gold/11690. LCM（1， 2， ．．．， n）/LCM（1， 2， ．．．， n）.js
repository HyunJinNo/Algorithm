const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();

let answer = 1;
const n = Number(input); // 2 <= n <= 100_000_000
const isPrime = new Uint8Array(n + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= n; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let i = 2; i <= n; i++) {
  if (!isPrime[i]) {
    continue;
  }

  let value = i;

  while (true) {
    if (value * i > n) {
      answer *= value;
      answer %= Math.pow(2, 32);
      break;
    }

    value *= i;
  }
}

console.log(answer);