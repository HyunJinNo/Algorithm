const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const findArea = (p1, p2, p3) => {
  return (
    Math.abs(
      p1[0] * (p2[1] - p3[1]) +
        p2[0] * (p3[1] - p1[1]) +
        p3[0] * (p1[1] - p2[1]),
    ) / 2
  );
};

const A = input[0].split(" ").map(Number);
const B = input[1].split(" ").map(Number);
const C = input[2].split(" ").map(Number);
const area = findArea(A, B, C).toFixed(1);
console.log(area);

const N = Number(input[3]); // 사과나무의 개수, 1 <= N <= 100
let count = 0;

for (let i = 4; i < N + 4; i++) {
  const coord = input[i].split(" ").map(Number);
  const area1 = findArea(coord, A, B);
  const area2 = findArea(coord, B, C);
  const area3 = findArea(coord, C, A);

  if ((area1 + area2 + area3).toFixed(1) === area) {
    count++;
  }
}

console.log(count);