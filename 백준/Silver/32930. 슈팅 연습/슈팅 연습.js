const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 1 <= N <= 100
// 1 <= M <= 100
const [N, M] = input[0].split(" ").map(Number);
const arr = [];
let index = 1;
let currentX = 0;
let currentY = 0;
let answer = 0;

for (let iter = 0; iter < N; iter++) {
  const [x, y] = input[index++].split(" ").map(Number);
  arr.push([x, y]);
}

for (let iter = 0; iter < M; iter++) {
  arr.sort(
    (a, b) =>
      (a[0] - currentX) * (a[0] - currentX) +
      (a[1] - currentY) * (a[1] - currentY) -
      (b[0] - currentX) * (b[0] - currentX) -
      (b[1] - currentY) * (b[1] - currentY),
  );

  const pos = arr.pop();
  answer += (pos[0] - currentX) * (pos[0] - currentX) + (pos[1] - currentY) * (pos[1] - currentY);
  currentX = pos[0];
  currentY = pos[1];

  arr.push(input[index++].split(" ").map(Number));
}

console.log(answer);