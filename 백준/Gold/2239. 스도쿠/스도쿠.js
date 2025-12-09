const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let answer = "";
const arr = [];

for (let i = 0; i < 9; i++) {
  arr.push(input[i].trim().split("").map(Number));
}

const solve = (row, col) => {
  if (answer.length > 0) {
    return;
  }

  if (row === 9) {
    for (let i = 0; i < 9; i++) {
      answer += `${arr[i].join("")}\n`;
    }
    return;
  }

  if (arr[row][col] !== 0) {
    if (col === 8) {
      solve(row + 1, 0);
    } else {
      solve(row, col + 1);
    }
    return;
  }

  const candidate = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (let i = 0; i < 9; i++) {
    candidate.delete(arr[i][col]);
    candidate.delete(arr[row][i]);
  }

  for (let i = Math.floor(row / 3) * 3; i < Math.floor(row / 3) * 3 + 3; i++) {
    for (let j = Math.floor(col / 3) * 3; j < Math.floor(col / 3) * 3 + 3; j++) {
      candidate.delete(arr[i][j]);
    }
  }

  if (candidate.size === 0) {
    return;
  }

  for (let num of candidate.values()) {
    arr[row][col] = num;

    if (col === 8) {
      solve(row + 1, 0);
    } else {
      solve(row, col + 1);
    }

    arr[row][col] = 0;
  }
};

solve(0, 0);

console.log(answer.trim());