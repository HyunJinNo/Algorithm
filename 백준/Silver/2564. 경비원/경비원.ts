const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");

// 블록의 가로의 길이: 1 <= w <= 100
// 블록의 세로의 길이: 1 <= h <= 100
const [w, h] = input[0].split(" ").map(Number);
const n = Number(input[1]); // 상점의 개수, 1 <= n <= 100
const position = input[n + 2].split(" ").map(Number); // 동근이의 위치
let answer = 0;

const findShortestPath = (store: number[]) => {
  switch (position[0]) {
    case 1:
      switch (store[0]) {
        case 1:
          answer += Math.abs(position[1] - store[1]);
          break;
        case 2:
          answer +=
            h +
            Math.min(position[1] + store[1], w * 2 - position[1] - store[1]);
          break;
        case 3:
          answer += position[1] + store[1];
          break;
        default:
          answer += w - position[1] + store[1];
      }
      break;
    case 2:
      switch (store[0]) {
        case 1:
          answer +=
            h +
            Math.min(position[1] + store[1], w * 2 - position[1] - store[1]);
          break;
        case 2:
          answer += Math.abs(position[1] - store[1]);
          break;
        case 3:
          answer += Math.abs(position[1] + h - store[1]);
          break;
        default:
          answer += Math.abs(w - position[1] + h - store[1]);
      }
      break;
    case 3:
      switch (store[0]) {
        case 1:
          answer += position[1] + store[1];
          break;
        case 2:
          answer += h - position[1] + store[1];
          break;
        case 3:
          answer += Math.abs(position[1] - store[1]);
          break;
        default:
          answer +=
            w +
            Math.min(position[1] + store[1], h * 2 - position[1] + store[1]);
      }
      break;
    default:
      switch (store[0]) {
        case 1:
          answer += position[1] + w - store[1];
          break;
        case 2:
          answer += h - position[1] + w - store[1];
          break;
        case 3:
          answer +=
            w +
            Math.min(position[1] + store[1], h * 2 - position[1] - store[1]);
          break;
        default:
          answer += Math.abs(position[1] - store[1]);
      }
  }
};

for (let i = 0; i < n; i++) {
  const store = input[i + 2].split(" ").map(Number);
  findShortestPath(store);
}
console.log(answer);
