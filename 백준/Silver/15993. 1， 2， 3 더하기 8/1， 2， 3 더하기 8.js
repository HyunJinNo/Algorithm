const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const MOD = 1_000_000_009;
const T = Number(input[0]); // 테스트 케이스의 개수
const arr = Array.from({ length: 100_001 }, () => Array(2).fill(0)); // [[홀수인 방법의 수, 짝수인 방법의 수], ...]
arr[1][0] = 1;
arr[2][0] = 1;
arr[2][1] = 1;
arr[3][0] = 2;
arr[3][1] = 2;

for (let num = 4; num <= 100_000; num++) {
  arr[num][0] = (arr[num - 1][1] + arr[num - 2][1] + arr[num - 3][1]) % MOD;
  arr[num][1] = (arr[num - 1][0] + arr[num - 2][0] + arr[num - 3][0]) % MOD;
}

let answer = "";

for (let i = 1; i <= T; i++) {
  const n = Number(input[i]); // 1 <= n <= 100_000
  answer += `${arr[n][0]} ${arr[n][1]}\n`;
}

console.log(answer.trim());