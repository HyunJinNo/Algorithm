const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 고양이의 수, 1 <= N <= 100
// K: 리본 종류의 수, 2 <= K <= 10_000
const [N, K] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let maxValue = 0;
let maxIndex = 0;

for (let col = 0; col < K; col++) {
  if (arr[0][col] > maxValue) {
    maxValue = arr[0][col];
    maxIndex = col;
  }
}

for (let row = 1; row < N; row++) {
  let tempValue = 0;
  let tempIndex = 0;

  for (let col = 0; col < K; col++) {
    if (col !== maxIndex) {
      arr[row][col] += maxValue;
    } else {
      let targetValue = 0;

      for (let j = 0; j < K; j++) {
        if (j === col) {
          continue;
        }

        targetValue = Math.max(targetValue, arr[row - 1][j]);
      }

      arr[row][col] += targetValue;
    }

    if (arr[row][col] > tempValue) {
      tempValue = arr[row][col];
      tempIndex = col;
    }
  }

  maxValue = tempValue;
  maxIndex = tempIndex;
}

console.log(Math.max(...arr[N - 1]));