const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// 1 <= N <= 50
// 1 <= M <= 50
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((str) => str.trim());
let answer = 1;

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    for (
      let length = Math.min(N - row - 1, M - col - 1);
      length >= 1;
      length--
    ) {
      if (
        arr[row][col] === arr[row + length][col] &&
        arr[row][col] === arr[row][col + length] &&
        arr[row][col] === arr[row + length][col + length]
      ) {
        answer = Math.max(answer, (length + 1) * (length + 1));
      }
    }
  }
}

console.log(answer);
