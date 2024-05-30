const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 6 <= R, C <= 50
// 1 <= T <= 1_000
const [R, C, T] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= R; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}
let top = 0;
let bottom = 0;
for (let row = 0; row < R; row++) {
  if (arr[row][0] === -1) {
    top = row;
    bottom = row + 1;
    break;
  }
}

const spread = () => {
  const temp = Array.from(Array(R), () => Array(C).fill(0));

  for (let row = 0; row < R; row++) {
    for (let col = 0; col < C; col++) {
      if (arr[row][col] === -1) {
        temp[row][col] = -1;
        continue;
      }

      const volume = Math.floor(arr[row][col] / 5);

      if (row - 1 >= 0 && arr[row - 1][col] !== -1) {
        temp[row - 1][col] += volume;
        arr[row][col] -= volume;
      }
      if (row + 1 < R && arr[row + 1][col] !== -1) {
        temp[row + 1][col] += volume;
        arr[row][col] -= volume;
      }
      if (col - 1 >= 0 && arr[row][col - 1] !== -1) {
        temp[row][col - 1] += volume;
        arr[row][col] -= volume;
      }
      if (col + 1 < C && arr[row][col + 1] !== -1) {
        temp[row][col + 1] += volume;
        arr[row][col] -= volume;
      }
      temp[row][col] += arr[row][col];
    }
  }

  arr = temp;
};

const clean = (top, bottom) => {
  for (let row = top - 1; row >= 1; row--) {
    arr[row][0] = arr[row - 1][0];
  }
  for (let col = 0; col < C - 1; col++) {
    arr[0][col] = arr[0][col + 1];
  }
  for (let row = 0; row < top; row++) {
    arr[row][C - 1] = arr[row + 1][C - 1];
  }
  for (let col = C - 1; col >= 2; col--) {
    arr[top][col] = arr[top][col - 1];
  }
  arr[top][1] = 0;

  for (let row = bottom + 1; row < R - 1; row++) {
    arr[row][0] = arr[row + 1][0];
  }
  for (let col = 0; col < C - 1; col++) {
    arr[R - 1][col] = arr[R - 1][col + 1];
  }
  for (let row = R - 1; row > bottom; row--) {
    arr[row][C - 1] = arr[row - 1][C - 1];
  }
  for (let col = C - 1; col >= 2; col--) {
    arr[bottom][col] = arr[bottom][col - 1];
  }
  arr[bottom][1] = 0;
};

for (let iter = 0; iter < T; iter++) {
  spread();
  clean(top, bottom);
}

let answer = 2;
for (let row = 0; row < R; row++) {
  for (let col = 0; col < C; col++) {
    answer += arr[row][col];
  }
}
console.log(answer);
