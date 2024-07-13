const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 가로 길이, 1 <= N <= 300
// M: 세로 길이, 1 <= M <= 300
const [N, M] = input[0].trim().split(" ").map(Number);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(new Int16Array(input[i].trim().split(" ").map(Number)));
}

const sumArr = Array.from(Array(N), () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  let sum = 0;
  for (let j = 0; j < M; j++) {
    sum += arr[i][j];
    sumArr[i][j] += sum;
    if (i > 0) {
      sumArr[i][j] += sumArr[i - 1][j];
    }
  }
}

const solution = (i, j, x, y) => {
  let result = sumArr[x][y];
  if (i > 0) {
    result -= sumArr[i - 1][y];
  }
  if (j > 0) {
    result -= sumArr[x][j - 1];
  }
  if (i > 0 && j > 0) {
    result += sumArr[i - 1][j - 1];
  }
  return result;
};

const K = Number(input[N + 1]);

for (let index = N + 2; index < N + K + 2; index++) {
  const [i, j, x, y] = input[index]
    .trim()
    .split(" ")
    .map((value) => Number(value) - 1);
  console.log(solution(i, j, x, y));
}
