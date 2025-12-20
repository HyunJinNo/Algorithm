const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const arr = Array.from({ length: 21 }, () => Array(211).fill(0n));

for (let i = 0; i <= 20; i++) {
  for (let j = 0; j <= i; j++) {
    arr[i][j] = 1n;
  }
}

for (let i = 1; i <= 20; i++) {
  const temp = Array(211).fill(0n);

  for (let j = 0; j <= ((i - 1) * i) / 2; j++) {
    for (let k = 0; k <= i; k++) {
      temp[j + k] += arr[i - 1][j] * arr[i][k];
    }
  }

  arr[i] = temp;
}

const T = Number(input[0]); // 테스트 케이스의 수
let answer = "";

for (let i = 1; i <= T; i++) {
  // 1 <= k <= 20
  // 0 <= N <= k * (k + 1) / 2
  const [k, N] = input[i].split(" ").map(Number);
  answer += `${arr[k][N]}\n`;
}

console.log(answer.trim());