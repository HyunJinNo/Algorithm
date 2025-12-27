const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();

const MOD = 123_456_789;
const N = Number(input); // 2 <= N <= 40_000
const isPrime = Array(N + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

const primeNumberList = [];

for (let i = 2; i <= N; i++) {
  if (isPrime[i]) {
    primeNumberList.push(i);
  }
}

const arr = Array(N + 1).fill(0);
arr[0] = 1;

for (const primeNumber of primeNumberList) {
  for (let i = primeNumber; i <= N; i++) {
    arr[i] += arr[i - primeNumber];
    arr[i] %= MOD;
  }
}

console.log(arr[N]);