const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const arr = [];
let row = 0;
let col = 0;
let answer = -1;

for (let i = 0; i < 3; i++) {
  arr.push(input[i].split(" ").map(Number));
}

loop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (arr[i][j] === 0) {
      row = i;
      col = j;
      break loop;
    }
  }
}

const getValue = () => {
  let value = 0;
  let temp = 100_000_000;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      value += arr[i][j] * temp;
      temp /= 10;
    }
  }

  return value;
};

const visited = new Set([getValue()]);
let peekIndex = 0;
const queue = [[0, row, col, getValue()]];

while (peekIndex < queue.length) {
  const [count, row, col, value] = queue[peekIndex++];

  if (value === 123456780) {
    answer = count;
    break;
  }

  arr[0][0] = Math.floor(value / 100_000_000) % 10;
  arr[0][1] = Math.floor(value / 10_000_000) % 10;
  arr[0][2] = Math.floor(value / 1_000_000) % 10;
  arr[1][0] = Math.floor(value / 100_000) % 10;
  arr[1][1] = Math.floor(value / 10_000) % 10;
  arr[1][2] = Math.floor(value / 1_000) % 10;
  arr[2][0] = Math.floor(value / 100) % 10;
  arr[2][1] = Math.floor(value / 10) % 10;
  arr[2][2] = value % 10;

  if (row - 1 >= 0) {
    arr[row][col] = arr[row - 1][col];
    arr[row - 1][col] = 0;

    const nextValue = getValue();

    if (!visited.has(nextValue)) {
      visited.add(nextValue);
      queue.push([count + 1, row - 1, col, nextValue]);
    }

    arr[row - 1][col] = arr[row][col];
    arr[row][col] = 0;
  }

  if (row + 1 < 3) {
    arr[row][col] = arr[row + 1][col];
    arr[row + 1][col] = 0;

    const nextValue = getValue();

    if (!visited.has(nextValue)) {
      visited.add(nextValue);
      queue.push([count + 1, row + 1, col, nextValue]);
    }

    arr[row + 1][col] = arr[row][col];
    arr[row][col] = 0;
  }

  if (col - 1 >= 0) {
    arr[row][col] = arr[row][col - 1];
    arr[row][col - 1] = 0;

    const nextValue = getValue();

    if (!visited.has(nextValue)) {
      visited.add(nextValue);
      queue.push([count + 1, row, col - 1, nextValue]);
    }

    arr[row][col - 1] = arr[row][col];
    arr[row][col] = 0;
  }

  if (col + 1 < 3) {
    arr[row][col] = arr[row][col + 1];
    arr[row][col + 1] = 0;

    const nextValue = getValue();

    if (!visited.has(nextValue)) {
      visited.add(nextValue);
      queue.push([count + 1, row, col + 1, nextValue]);
    }

    arr[row][col + 1] = arr[row][col];
    arr[row][col] = 0;
  }
}

console.log(answer);