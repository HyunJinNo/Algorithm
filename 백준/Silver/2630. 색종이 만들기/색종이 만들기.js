const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const answer = [0, 0]; // [하얀색 색종이의 개수, 파란색 색종이의 개수]
const N = Number(input[0]); // 한 변의 길이, N = 2, 4, 8, 16, 32, 64, 128
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} len
 * @returns void
 */
const solve = (row, col, len) => {
  if (len === 1) {
    answer[arr[row][col]]++;
    return;
  }

  let flag = true;
  for (let i = row; i < row + len; i++) {
    for (let j = col; j < col + len; j++) {
      if (arr[i][j] !== arr[row][col]) {
        flag = false;
        break;
      }
    }
  }

  if (flag) {
    answer[arr[row][col]]++;
  } else {
    solve(row, col, len / 2);
    solve(row + len / 2, col, len / 2);
    solve(row, col + len / 2, len / 2);
    solve(row + len / 2, col + len / 2, len / 2);
  }
};

solve(0, 0, N);
console.log(answer[0]);
console.log(answer[1]);
