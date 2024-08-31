const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

// 1 <= N <= 15
// 0 <= r, c <= 2^N
let [N, r, c] = input.trim().split(" ").map(Number);
let [startRow, startCol, endRow, endCol] = [
  0,
  0,
  Math.pow(2, N),
  Math.pow(2, N),
];

let answer = 0;

while (N > 0) {
  N--;
  const midRow = (startRow + endRow) / 2;
  const midCol = (startCol + endCol) / 2;

  if (r < midRow && c < midCol) {
    endRow = midRow;
    endCol = midCol;
  } else if (r < midRow && c >= midCol) {
    answer += Math.pow(2, N) * Math.pow(2, N);
    endRow = midRow;
    startCol = midCol;
  } else if (r >= midRow && c < midCol) {
    answer += Math.pow(2, N) * Math.pow(2, N) * 2;
    startRow = midRow;
    endCol = midCol;
  } else {
    answer += Math.pow(2, N) * Math.pow(2, N) * 3;
    startRow = midRow;
    startCol = midCol;
  }
}

console.log(answer);
