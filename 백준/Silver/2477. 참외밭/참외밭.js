const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const K = Number(input[0]); // 참외의 개수, 1 <= K <= 20
const points = [[0, 0]];
let minRow = Infinity;
let maxRow = -Infinity;
let minCol = Infinity;
let maxCol = -Infinity;

for (let i = 1; i <= 5; i++) {
  const [direction, length] = input[i].split(" ").map(Number);
  const point = [0, 0];

  switch (direction) {
    case 1: // 동쪽
      point[0] = points[i - 1][0];
      point[1] = points[i - 1][1] + length;
      break;
    case 2: // 서쪽
      point[0] = points[i - 1][0];
      point[1] = points[i - 1][1] - length;
      break;
    case 3: // 남쪽
      point[0] = points[i - 1][0] + length;
      point[1] = points[i - 1][1];
      break;
    case 4: // 북쪽
      point[0] = points[i - 1][0] - length;
      point[1] = points[i - 1][1];
      break;
    default:
      break;
  }

  points.push(point);

  minRow = Math.min(minRow, point[0]);
  maxRow = Math.max(maxRow, point[0]);
  minCol = Math.min(minCol, point[1]);
  maxCol = Math.max(maxCol, point[1]);
}

const index = points.findIndex(
  (point) =>
    point[0] !== minRow &&
    point[0] !== maxRow &&
    point[1] !== minCol &&
    point[1] !== maxCol,
);

const largeArea = (maxRow - minRow) * (maxCol - minCol);

if (index === 0) {
  const smallArea =
    (Math.max(points[1][0], points[5][0]) -
      Math.min(points[1][0], points[5][0])) *
    (Math.max(points[1][1], points[5][1]) -
      Math.min(points[1][1], points[5][1]));

  console.log(K * (largeArea - smallArea));
} else if (index === 5) {
  const smallArea =
    (Math.max(points[0][0], points[4][0]) -
      Math.min(points[0][0], points[4][0])) *
    (Math.max(points[0][1], points[4][1]) -
      Math.min(points[0][1], points[4][1]));

  console.log(K * (largeArea - smallArea));
} else {
  const smallArea =
    (Math.max(points[index + 1][0], points[index - 1][0]) -
      Math.min(points[index + 1][0], points[index - 1][0])) *
    (Math.max(points[index + 1][1], points[index - 1][1]) -
      Math.min(points[index + 1][1], points[index - 1][1]));

  console.log(K * (largeArea - smallArea));
}
