const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 3 <= N <= 100
const arr = input.slice(1).map((str) => str.split(" ").map(Number));
const sum = (N * (N * N + 1)) / 2;
let answer = true;

const checkRows = () => {
  const numSet = new Set();

  for (let row = 0; row < N; row++) {
    let temp = 0;

    for (let col = 0; col < N; col++) {
      if (
        arr[row][col] <= 0 ||
        arr[row][col] > N * N ||
        numSet.has(arr[row][col])
      ) {
        answer = false;
        return;
      }
      numSet.add(arr[row][col]);
      temp += arr[row][col];
    }

    if (temp !== sum) {
      answer = false;
      return;
    }
  }
};

const checkCols = () => {
  if (!answer) {
    return;
  }

  for (let col = 0; col < N; col++) {
    let temp = 0;

    for (let row = 0; row < N; row++) {
      if (arr[row][col] <= 0 || arr[row][col] > N * N) {
        answer = false;
        return;
      }
      temp += arr[row][col];
    }

    if (temp !== sum) {
      answer = false;
      return;
    }
  }
};

const checkDiagonals = () => {
  if (!answer) {
    return;
  }

  let temp = 0;
  for (let i = 0; i < N; i++) {
    temp += arr[i][i];
  }

  if (temp !== sum) {
    answer = false;
    return;
  }

  temp = 0;
  for (let i = 0; i < N; i++) {
    temp += arr[i][N - i - 1];
  }

  if (temp !== sum) {
    answer = false;
  }
};

checkRows();
checkCols();
checkDiagonals();

console.log(answer ? "TRUE" : "FALSE");
