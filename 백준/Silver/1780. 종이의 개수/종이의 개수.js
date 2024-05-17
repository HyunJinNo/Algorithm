const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 1 <= N <= 3^7
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const answer = {
  "-1": 0,
  0: 0,
  1: 0,
};

const solve = (row, col, len) => {
  if (len === 1) {
    answer[arr[row][col]]++;
    return;
  }

  let flag = true;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[row + i][col + j] !== arr[row][col]) {
        flag = false;
        break;
      }
    }
  }

  if (flag) {
    answer[arr[row][col]]++;
  } else {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        solve(row + (len * i) / 3, col + (len * j) / 3, len / 3);
      }
    }
  }
};

solve(0, 0, N);
console.log(answer["-1"]);
console.log(answer["0"]);
console.log(answer["1"]);
