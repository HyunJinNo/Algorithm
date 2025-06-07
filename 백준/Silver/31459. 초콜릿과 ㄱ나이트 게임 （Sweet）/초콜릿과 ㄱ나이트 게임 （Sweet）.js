const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 개수, 1 <= T <= 1_000
let answer = "";

for (let i = 1; i <= T; i++) {
  const [X, Y, x, y] = input[i].split(" ").map(Number);
  const arr = Array.from({ length: Y }, () => Array(X).fill(false));

  for (let row = Y - 1; row >= 0; row--) {
    for (let col = X - 1; col >= 0; col--) {
      if (row + y >= Y || col + x >= X || !arr[row + y][col + x]) {
        arr[row][col] = true;
      }
    }
  }

  let result = 0;

  for (let row = 0; row < Y; row++) {
    for (let col = 0; col < X; col++) {
      if (arr[row][col]) {
        result++;
      }
    }
  }

  answer += `${result}\n`;
}

console.log(answer.trimEnd());
