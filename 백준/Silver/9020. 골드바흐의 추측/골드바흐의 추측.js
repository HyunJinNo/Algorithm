const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 개수
const isPrime = new Int8Array(10_001).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= 10_000; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= 10_000; j += i) {
      isPrime[j] = false;
    }
  }
}

let answer = "";

for (let i = 1; i <= T; i++) {
  const n = Number(input[i]); // 4 <= n <= 10_000, n % 2 === 0

  for (let i = n / 2; i >= 2; i--) {
    if (isPrime[i] && isPrime[n - i]) {
      answer += `${i} ${n - i}\n`;
      break;
    }
  }
}

console.log(answer.trim());