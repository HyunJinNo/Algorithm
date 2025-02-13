const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 구역의 가로 길이, // 1 <= N <= 500_000
// M: 구역의 세로 길이, // 1 <= M <= 500_000
// L: 트램펄린의 한 변의 길이, 1 <= L <= 100_000
// K: 별똥별의 수, 1 <= K <= 100
const [N, M, L, K] = input[0].split(" ").map(Number);
const points = input.slice(1).map((str) => str.split(" ").map(Number));
let answer = 0;

for (let i = 0; i < K; i++) {
  for (let j = 0; j <= L; j++) {
    if (points[i][0] - j < 0) {
      continue;
    }

    const startX = points[i][0] - j;
    const startY = points[i][1];
    const endX = startX + L;
    const endY = startY + L;

    const count = points.reduce((total, point) => {
      if (
        point[0] >= startX &&
        point[0] <= endX &&
        point[1] >= startY &&
        point[1] <= endY
      ) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);

    answer = Math.max(answer, count);
  }
}

console.log(K - answer);
