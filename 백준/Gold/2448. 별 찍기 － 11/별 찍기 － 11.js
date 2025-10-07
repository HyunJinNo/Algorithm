const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // N: 3, 6, 12, 24, 48, 96, ... , 3072
const k = Math.log2(N / 3);
let length = 5;

for (let i = 0; i < k; i++) {
  length = length * 2 + 1;
}

const arr = Array.from({ length: N }, () => Array(length).fill(" "));

const findAnswer = (k, startRow, startCol, endRow, endCol) => {
  if (k === 0) {
    arr[startRow][startCol + 2] = "*";
    arr[startRow + 1][startCol + 1] = "*";
    arr[startRow + 1][startCol + 3] = "*";

    for (let i = 0; i < 5; i++) {
      arr[startRow + 2][startCol + i] = "*";
    }
    return;
  }

  findAnswer(
    k - 1,
    startRow,
    startCol + ((endCol - startCol) / 2 + 1) / 2,
    startRow + (endRow - startRow - 1) / 2,
    endCol - ((endCol - startCol) / 2 + 1) / 2,
  );
  findAnswer(k - 1, (startRow + endRow + 1) / 2, startCol, endRow, (startCol + endCol) / 2 - 1);
  findAnswer(k - 1, (startRow + endRow + 1) / 2, (startCol + endCol) / 2 + 1, endRow, endCol);
};

findAnswer(k, 0, 0, N - 1, length - 1);

let answer = "";

for (let row = 0; row < N; row++) {
  answer += arr[row].join("") + "\n";
}

console.log(answer.trimEnd());