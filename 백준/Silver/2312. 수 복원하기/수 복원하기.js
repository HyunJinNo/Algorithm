const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 수
const isPrime = Array(100_001).fill(false);
const visited = Array(100_001).fill(false);
isPrime[2] = true;
visited[2] = true;

for (let x = 3; x <= 100000; x += 2) {
  if (!visited[x]) {
    let flag = true;
    for (let y = 2; y <= Math.floor(Math.sqrt(x)); y++) {
      if (x % y === 0) {
        flag = false;
        break;
      }
    }

    isPrime[x] = flag;
    visited[x] = true;

    let multiplier = 2;

    while (x * multiplier <= 100000) {
      isPrime[x * multiplier] = false;
      visited[x * multiplier] = true;
      multiplier++;
    }
  }
}

let answer = "";

for (let i = 1; i <= T; i++) {
  let N = Number(input[i]); // 2 <= N <= 100_000
  let divisor = 2;
  const map = new Map();

  while (N > 1) {
    if (N % divisor === 0) {
      map.set(divisor, (map.get(divisor) ?? 0) + 1);
      N /= divisor;
    } else {
      divisor++;
    }
  }

  for (let [key, value] of map) {
    answer += `${key} ${value}\n`;
  }
}

console.log(answer.trim());
