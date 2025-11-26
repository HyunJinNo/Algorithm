const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 지점의 수, 1 <= N <= 100_000
// M: 목적지까지의 거리, 1 <= M <= 1_000_000
const [N, M] = input[0].split(" ").map(Number);
const p = input[1].split(" ").map(Number);
const x = input[2].split(" ").map(Number);
let index = 0;
let answer = 0;

while (index < N) {
  let nextIndex = index;
  let nextPos = p[index];

  if (p[index] + x[index] >= M) {
    break;
  }

  for (let i = index + 1; i < N; i++) {
    if (p[index] + x[index] < p[i]) {
      break;
    }

    if (nextPos < p[i] + x[i]) {
      nextIndex = i;
      nextPos = p[i] + x[i];
    }
  }

  if (nextIndex === index) {
    answer = -1;
    break;
  } else {
    index = nextIndex;
    answer++;
  }
}

console.log(answer);