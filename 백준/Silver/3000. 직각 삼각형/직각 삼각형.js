const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 점의 개수, 3 <= N <= 100_000
const points = [];
const xMap = new Map();
const yMap = new Map();
let answer = 0;

for (let i = 1; i <= N; i++) {
  // 1 <= x, y <= 100_000
  const [x, y] = input[i].split(" ").map(Number);
  points.push([x, y]);

  xMap.set(x, (xMap.get(x) ?? 0) + 1);
  yMap.set(y, (yMap.get(y) ?? 0) + 1);
}

for (let i = 0; i < N; i++) {
  const [x, y] = points[i];
  answer += (xMap.get(x) - 1) * (yMap.get(y) - 1);
}

console.log(answer);