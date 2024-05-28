const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 종이의 크기
// 1 <= N, M <= 100
const [N, M] = input[0].split(" ").map(Number);

const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}

const solve = () => {
  let answer = N * M * 2;

  for (let i = 0; i < N; i++) {
    let currentHeight = 0;
    for (let j = 0; j < M; j++) {
      answer += Math.max(0, arr[i][j] - currentHeight);
      currentHeight = arr[i][j];
    }
  }

  for (let j = 0; j < M; j++) {
    let currentHeight = 0;
    for (let i = 0; i < N; i++) {
      answer += Math.max(0, arr[i][j] - currentHeight);
      currentHeight = arr[i][j];
    }
  }

  for (let i = 0; i < N; i++) {
    let currentHeight = 0;
    for (let j = M - 1; j >= 0; j--) {
      answer += Math.max(0, arr[i][j] - currentHeight);
      currentHeight = arr[i][j];
    }
  }

  for (let j = 0; j < M; j++) {
    let currentHeight = 0;
    for (let i = N - 1; i >= 0; i--) {
      answer += Math.max(0, arr[i][j] - currentHeight);
      currentHeight = arr[i][j];
    }
  }

  return answer;
};

console.log(solve());
