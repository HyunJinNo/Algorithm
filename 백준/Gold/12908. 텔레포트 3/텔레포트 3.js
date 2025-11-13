const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const [xs, ys] = input[0].split(" ").map(Number);
const [xe, ye] = input[1].split(" ").map(Number);
const arr = Array.from({ length: 8 }, () => Array(8).fill(2_000_000_000));
const points = [[xs, ys]];

for (let i = 2; i < 5; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  points.push([x1, y1]);
  points.push([x2, y2]);
}

points.push([xe, ye]);

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (i === j) {
      arr[i][j] = 0;
    } else {
      arr[i][j] = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
    }
  }
}

for (let i = 2; i < 5; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  // [xs, ys] ~ [x1, y1]
  arr[0][i * 2 - 3] = Math.min(arr[0][i * 2 - 3], Math.abs(xs - x1) + Math.abs(ys - y1));
  arr[i * 2 - 3][0] = Math.min(arr[i * 2 - 3][0], Math.abs(xs - x1) + Math.abs(ys - y1));

  // [xs, ys] ~ [x2, y2]
  arr[0][i * 2 - 2] = Math.min(arr[0][i * 2 - 2], Math.abs(xs - x2) + Math.abs(ys - y2));
  arr[i * 2 - 2][0] = Math.min(arr[i * 2 - 2][0], Math.abs(xs - x2) + Math.abs(ys - y2));

  // [x1, y1] ~ [x2, y2]
  arr[i * 2 - 3][i * 2 - 2] = Math.min(10, arr[i * 2 - 3][i * 2 - 2], Math.abs(x1 - x2) + Math.abs(y1 - y2));
  arr[i * 2 - 2][i * 2 - 3] = Math.min(10, arr[i * 2 - 2][i * 2 - 3], Math.abs(x1 - x2) + Math.abs(y1 - y2));

  // [x1, y1] ~ [xe, ye]
  arr[i * 2 - 3][7] = Math.min(arr[i * 2 - 3][7], Math.abs(x1 - xe) + Math.abs(y1 - ye));
  arr[7][i * 2 - 3] = Math.min(arr[7][i * 2 - 3], Math.abs(x1 - xe) + Math.abs(y1 - ye));

  // [x2, y2] ~ [xe, ye]
  arr[i * 2 - 2][7] = Math.min(arr[i * 2 - 2][7], Math.abs(x2 - xe) + Math.abs(y2 - ye));
  arr[7][i * 2 - 2] = Math.min(arr[7][i * 2 - 2], Math.abs(x2 - xe) + Math.abs(y2 - ye));
}

for (let m = 0; m < 8; m++) {
  for (let s = 0; s < 8; s++) {
    for (let e = 0; e < 8; e++) {
      arr[s][e] = Math.min(arr[s][e], arr[s][m] + arr[m][e]);
    }
  }
}

console.log(arr[0][7]);