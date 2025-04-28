const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 색종이의 수, 1 <= N <= 100
const arr = Array.from({ length: 102 }, () => Array(102).fill(false));

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  for (let row = y; row < y + 10; row++) {
    for (let col = x; col < x + 10; col++) {
      arr[row][col] = true;
    }
  }
}

let answer = 0;

for (let row = 0; row <= 100; row++) {
  for (let col = 0; col <= 100; col++) {
    if (arr[row][col]) {
      let count = 0;

      if (arr[row - 1][col]) {
        count++;
      }

      if (arr[row + 1][col]) {
        count++;
      }

      if (arr[row][col - 1]) {
        count++;
      }

      if (arr[row][col + 1]) {
        count++;
      }

      if (count === 3) {
        answer++;
      } else if (count === 2) {
        answer += 2;
      }
    }
  }
}

console.log(answer);
