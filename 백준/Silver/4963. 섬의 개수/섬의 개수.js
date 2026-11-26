const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
let answer = "";
let index = 0;

while (true) {
  // 1 <= w <= 50
  // 1 <= h <= 50
  const [w, h] = input[index++].split(" ").map(Number);

  if (w === 0 && h === 0) {
    console.log(answer.trim());
    break;
  }

  let count = 0;
  const arr = [];

  for (let iter = 0; iter < h; iter++) {
    arr.push(input[index++].split(" ").map(Number));
  }

  const dfs = (row, col) => {
    arr[row][col] = 0;

    if (row - 1 >= 0 && col - 1 >= 0 && arr[row - 1][col - 1] === 1) {
      dfs(row - 1, col - 1);
    }

    if (row - 1 >= 0 && arr[row - 1][col] === 1) {
      dfs(row - 1, col);
    }

    if (row - 1 >= 0 && col + 1 < w && arr[row - 1][col + 1] === 1) {
      dfs(row - 1, col + 1);
    }

    if (col - 1 >= 0 && arr[row][col - 1] === 1) {
      dfs(row, col - 1);
    }

    if (col + 1 < w && arr[row][col + 1] === 1) {
      dfs(row, col + 1);
    }

    if (row + 1 < h && col - 1 >= 0 && arr[row + 1][col - 1] === 1) {
      dfs(row + 1, col - 1);
    }

    if (row + 1 < h && arr[row + 1][col] === 1) {
      dfs(row + 1, col);
    }

    if (row + 1 < h && col + 1 < w && arr[row + 1][col + 1] === 1) {
      dfs(row + 1, col + 1);
    }
  };

  for (let row = 0; row < h; row++) {
    for (let col = 0; col < w; col++) {
      if (arr[row][col] === 1) {
        count++;
        dfs(row, col);
      }
    }
  }

  answer += `${count}\n`;
}