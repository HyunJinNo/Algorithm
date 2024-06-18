const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 과일의 개수, 1 <= N <= 1_000
// L: 초기 길이, 1 <= L <= 10_000
const [N, L] = input[0].trim().split(" ").map(Number);
const h = new Int16Array(input[1].trim().split(" ").map(Number)); // 1 <= h[i] <= 10_000
h.sort((a, b) => a - b);
let answer = L;

for (let i = 0; i < N; i++) {
  if (answer >= h[i]) {
    answer++;
  } else {
    break;
  }
}
console.log(answer);
