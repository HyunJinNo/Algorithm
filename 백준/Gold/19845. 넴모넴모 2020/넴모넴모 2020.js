const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 게임판의 세로 크기, 1 <= N <= 250_000
// Q: 레이저를 설치할 수 있는 위치의 수, 1 <= Q <= 250_000
const [N, Q] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 10^9
let answer = "";

for (let i = 2; i < 2 + Q; i++) {
  const [col, row] = input[i].split(" ").map(Number);

  let left = 0;
  let right = N;

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < col) {
      right = mid;
    } else {
      left = mid;
    }
  }

  let result = arr[row - 1] - col;
  result += right - row + 1;

  if (result < 0) {
    result = 0;
  }

  answer += `${result}\n`;
}

console.log(answer.trim());