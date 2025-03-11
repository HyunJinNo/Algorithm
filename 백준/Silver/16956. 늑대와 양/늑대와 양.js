const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 1 <= R <= 500
// 1 <= C <= 500
const [R, C] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((str) => str.trim().replaceAll(".", "D"));
let flag = true;

loop: for (let row = 0; row < R; row++) {
  for (let col = 0; col < C; col++) {
    if (arr[row][col] === "W") {
      if (
        (row - 1 >= 0 && arr[row - 1][col] === "S") ||
        (row + 1 < R && arr[row + 1][col] === "S") ||
        (col - 1 >= 0 && arr[row][col - 1] === "S") ||
        (col + 1 < C && arr[row][col + 1] === "S")
      ) {
        flag = false;
        break loop;
      }
    }
  }
}

if (!flag) {
  console.log(0);
} else {
  console.log(1);
  console.log(arr.join("\n"));
}
