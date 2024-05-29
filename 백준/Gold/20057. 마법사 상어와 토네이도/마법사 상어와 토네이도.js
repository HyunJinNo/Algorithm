const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 격자의 크기, 3 <= N <= 499 (홀수)
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}

let answer = 0;
let row = Math.floor(N / 2);
let col = row;
let iter = 0;

/**
 * 비율이 적혀있는 칸으로 모래를 이동시키는 함수
 * @param {number} row 이동하는 곳의 Row
 * @param {number} col 이동하는 곳의 Col
 * @param {number} originRow 이동 전 Row
 * @param {number} originCol 이동 전 Col
 * @param {number} volume 이동하는 모래의 양
 */
const check = (row, col, originRow, originCol, volume) => {
  arr[originRow][originCol] -= volume;

  if (row < 0 || col < 0 || row >= N || col >= N) {
    answer += volume;
  } else {
    arr[row][col] += volume;
  }
};

/**
 * 토네이도가 arr[row][col]로 이동할 때 모래를 이동시키는 함수
 * @param {number} row
 * @param {number} col
 * @param {number} direction 1: North, 2: East, 3: South, 4: West
 */
const move = (row, col, direction) => {
  const temp = arr[row][col];

  switch (direction) {
    case 1:
      check(row + 1, col - 1, row, col, Math.floor(temp / 100));
      check(row + 1, col + 1, row, col, Math.floor(temp / 100));
      check(row, col - 2, row, col, Math.floor(temp / 50));
      check(row, col - 1, row, col, Math.floor((temp * 7) / 100));
      check(row, col + 1, row, col, Math.floor((temp * 7) / 100));
      check(row, col + 2, row, col, Math.floor(temp / 50));
      check(row - 1, col - 1, row, col, Math.floor(temp / 10));
      check(row - 1, col + 1, row, col, Math.floor(temp / 10));
      check(row - 2, col, row, col, Math.floor(temp / 20));
      check(row - 1, col, row, col, arr[row][col]);
      break;
    case 2:
      check(row - 1, col - 1, row, col, Math.floor(temp / 100));
      check(row + 1, col - 1, row, col, Math.floor(temp / 100));
      check(row - 2, col, row, col, Math.floor(temp / 50));
      check(row - 1, col, row, col, Math.floor((temp * 7) / 100));
      check(row + 1, col, row, col, Math.floor((temp * 7) / 100));
      check(row + 2, col, row, col, Math.floor(temp / 50));
      check(row - 1, col + 1, row, col, Math.floor(temp / 10));
      check(row + 1, col + 1, row, col, Math.floor(temp / 10));
      check(row, col + 2, row, col, Math.floor(temp / 20));
      check(row, col + 1, row, col, arr[row][col]);
      break;
    case 3:
      check(row - 1, col - 1, row, col, Math.floor(temp / 100));
      check(row - 1, col + 1, row, col, Math.floor(temp / 100));
      check(row, col - 2, row, col, Math.floor(temp / 50));
      check(row, col - 1, row, col, Math.floor((temp * 7) / 100));
      check(row, col + 1, row, col, Math.floor((temp * 7) / 100));
      check(row, col + 2, row, col, Math.floor(temp / 50));
      check(row + 1, col - 1, row, col, Math.floor(temp / 10));
      check(row + 1, col + 1, row, col, Math.floor(temp / 10));
      check(row + 2, col, row, col, Math.floor(temp / 20));
      check(row + 1, col, row, col, arr[row][col]);
      break;
    case 4:
      check(row - 1, col + 1, row, col, Math.floor(temp / 100));
      check(row + 1, col + 1, row, col, Math.floor(temp / 100));
      check(row - 2, col, row, col, Math.floor(temp / 50));
      check(row - 1, col, row, col, Math.floor((temp * 7) / 100));
      check(row + 1, col, row, col, Math.floor((temp * 7) / 100));
      check(row + 2, col, row, col, Math.floor(temp / 50));
      check(row - 1, col - 1, row, col, Math.floor(temp / 10));
      check(row + 1, col - 1, row, col, Math.floor(temp / 10));
      check(row, col - 2, row, col, Math.floor(temp / 20));
      check(row, col - 1, row, col, arr[row][col]);
      break;
    default:
      break;
  }
};

loop: while (true) {
  iter++;

  // 서쪽으로 이동
  for (let i = 1; i <= iter; i++) {
    if (row === 0 && col === 0) {
      break loop;
    }
    move(row, --col, 4);
  }

  // 남쪽으로 이동
  for (let i = 1; i <= iter; i++) {
    move(++row, col, 3);
  }

  iter++;

  // 동쪽으로 이동
  for (let i = 1; i <= iter; i++) {
    move(row, ++col, 2);
  }

  // 북쪽으로 이동
  for (let i = 1; i <= iter; i++) {
    move(--row, col, 1);
  }
}
console.log(answer);
