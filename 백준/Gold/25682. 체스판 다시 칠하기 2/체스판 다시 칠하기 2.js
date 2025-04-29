const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 세로의 길이, 1 <= N <= 2_000
// M: 가로의 길이, 1 <= M <= 2_000
// K: 자를 길이, 1 <= K <= min(N, M)
const [N, M, K] = input[0].split(" ").map(Number);
const board = input.slice(1).map((str) => str.trim());
const arr = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

for (let row = 0; row < N; row++) {
  let sum = 0;

  for (let col = 0; col < M; col++) {
    if ((row + col) % 2 === 0 && board[row][col] === "W") {
      sum++;
    } else if ((row + col) % 2 === 1 && board[row][col] === "B") {
      sum++;
    }

    arr[row + 1][col + 1] = sum;
  }
}

for (let row = 1; row <= N; row++) {
  for (let col = 1; col <= M; col++) {
    arr[row][col] += arr[row - 1][col];
  }
}

const getSum = (row1, col1, row2, col2) => {
  let result = arr[row2][col2];
  result -= arr[row1 - 1][col2];
  result -= arr[row2][col1 - 1];
  result += arr[row1 - 1][col1 - 1];

  return result;
};

let answer = K * K;

for (let row = 1; row <= N - K + 1; row++) {
  for (let col = 1; col <= M - K + 1; col++) {
    let result = getSum(row, col, row + K - 1, col + K - 1);
    answer = Math.min(answer, result, K * K - result);
  }
}

console.log(answer);
