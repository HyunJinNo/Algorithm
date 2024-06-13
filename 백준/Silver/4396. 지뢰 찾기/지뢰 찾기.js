const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const n = Number(input[0]); // 1 <= n <= 10
const mine = [];
const result = Array.from(Array(n), () => Array(n).fill("."));
let flag = false;

const findMine = () => {
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (mine[row][col] === "*") {
        result[row][col] = "*";
      }
    }
  }
};

const open = (row, col) => {
  if (mine[row][col] === "*") {
    result[row][col] = "*";

    if (!flag) {
      findMine();
    }
    flag = true;
  } else {
    let count = 0;

    if (row - 1 >= 0 && mine[row - 1][col] === "*") {
      count++;
    }
    if (row + 1 < n && mine[row + 1][col] === "*") {
      count++;
    }
    if (col - 1 >= 0 && mine[row][col - 1] === "*") {
      count++;
    }
    if (col + 1 < n && mine[row][col + 1] === "*") {
      count++;
    }
    if (row - 1 >= 0 && col - 1 >= 0 && mine[row - 1][col - 1] === "*") {
      count++;
    }
    if (row - 1 >= 0 && col + 1 < n && mine[row - 1][col + 1] === "*") {
      count++;
    }
    if (row + 1 < n && col - 1 >= 0 && mine[row + 1][col - 1] === "*") {
      count++;
    }
    if (row + 1 < n && col + 1 < n && mine[row + 1][col + 1] === "*") {
      count++;
    }

    result[row][col] = count.toString();
  }
};

for (let i = 1; i <= n; i++) {
  mine.push(input[i].trim().split(""));
}

for (let i = n + 1; i <= n * 2; i++) {
  const temp = input[i].trim().split("");
  for (let j = 0; j < n; j++) {
    if (temp[j] === "x") {
      open(i - n - 1, j);
    }
  }
}

for (let arr of result) {
  console.log(arr.join(""));
}
