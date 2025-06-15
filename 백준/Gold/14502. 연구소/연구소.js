const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 지도의 세로 크기, 3 <= N <= 8
// M: 지도의 가로 크기, 3 <= M <= 8
const [N, M] = input[0].split(" ").map(Number);
const arr = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const propagation = (row, col) => {
  if (row - 1 >= 0 && arr[row - 1][col] === 0) {
    arr[row - 1][col] = 3;
    propagation(row - 1, col);
  }

  if (row + 1 < N && arr[row + 1][col] === 0) {
    arr[row + 1][col] = 3;
    propagation(row + 1, col);
  }

  if (col - 1 >= 0 && arr[row][col - 1] === 0) {
    arr[row][col - 1] = 3;
    propagation(row, col - 1);
  }

  if (col + 1 < M && arr[row][col + 1] === 0) {
    arr[row][col + 1] = 3;
    propagation(row, col + 1);
  }
};

const findAnswer = (startRow, startCol, count) => {
  if (count === 3) {
    let result = 0;

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < M; col++) {
        if (arr[row][col] === 2) {
          propagation(row, col);
        }
      }
    }

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < M; col++) {
        if (arr[row][col] === 0) {
          result++;
        } else if (arr[row][col] === 3) {
          arr[row][col] = 0;
        }
      }
    }

    answer = Math.max(answer, result);
    return;
  }

  let row = startRow;
  let col = startCol;

  while (row < N) {
    if (arr[row][col] === 0) {
      arr[row][col] = 1;

      if (col + 1 === M) {
        findAnswer(row + 1, 0, count + 1);
      } else {
        findAnswer(row, col + 1, count + 1);
      }

      arr[row][col] = 0;
    }

    if (col + 1 === M) {
      row++;
      col = 0;
    } else {
      col++;
    }
  }
};

findAnswer(0, 0, 0);
console.log(answer);