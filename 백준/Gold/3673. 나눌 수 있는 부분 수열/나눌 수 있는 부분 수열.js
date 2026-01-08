const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const c = Number(input[0]); // 테스트 케이스의 개수, 1 <= c <= 200
let index = 1;
let answer = "";

for (let iter = 0; iter < c; iter++) {
  // 1 <= d <= 1_000_000
  // n: 수열의 크기, 1 <= n <= 50_000
  const [d, n] = input[index++].split(" ").map(Number);
  const arr = input[index++].split(" ").map(Number); // 1 <= arr[i] <= 1_000_000_000

  const S = Array(n).fill(0);
  S[0] = arr[0] % d;

  const map = new Map();
  map.set(S[0], 1);

  for (let i = 1; i < n; i++) {
    S[i] = S[i - 1] + arr[i];
    S[i] %= d;
    map.set(S[i], (map.get(S[i]) ?? 0) + 1);
  }

  let count = 0;

  for (const [key, value] of map) {
    if (key === 0) {
      count += (value * (value + 1)) / 2;
    } else {
      count += (value * (value - 1)) / 2;
    }
  }

  answer += `${count}\n`;
}

console.log(answer.trim());