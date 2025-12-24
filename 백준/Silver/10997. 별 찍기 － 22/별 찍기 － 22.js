const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const N = Number(input); // 1 <= N <= 100

if (N === 1) {
  console.log("*");
  process.exit(0);
}

const rowLength = N * 4 - 1;
const colLength = N * 4 - 3;

const arr = Array.from({ length: rowLength }, () => Array(colLength).fill(" "));
let direction = "N";
let row = rowLength - 1;
let col = colLength - 1;

for (let col = 0; col < colLength; col++) {
  arr[0][col] = "*";
  arr[rowLength - 1][col] = "*";
}

for (let row = 1; row < rowLength; row++) {
  arr[row][0] = "*";
}

while (true) {
  arr[row][col] = "*";

  if (row === N * 2 && col === N * 2 - 2) {
    break;
  }

  switch (direction) {
    case "N":
      if (arr[row - 2][col] === "*") {
        direction = "W";
        col--;
      } else {
        row--;
      }
      break;
    case "E":
      if (arr[row][col + 2] === "*") {
        direction = "N";
        row--;
      } else {
        col++;
      }
      break;
    case "S":
      if (arr[row + 2][col] === "*") {
        direction = "E";
        col++;
      } else {
        row++;
      }
      break;
    case "W":
      if (arr[row][col - 2] === "*") {
        direction = "S";
        row++;
      } else {
        col--;
      }
      break;
    default:
      break;
  }
}

let answer = arr.reduce((total, current) => total + `${current.join("").trim()}\n`, "");
console.log(answer.trim());