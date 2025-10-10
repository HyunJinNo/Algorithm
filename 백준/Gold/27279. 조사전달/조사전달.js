const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 조사전달에 응답한 병사의 수
// M: 사역의 개수
// 1 <= M <= N <= 100_000
const [N, M] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number); // 1 <= a[i] <= M
const b = input[2].split(" ").map(Number); // 1 <= b[i] <= N

a.sort((x, y) => x - y);
b.sort((x, y) => x - y);

let index = M;
let answer = true;

for (let i = N - 1; i >= 0; i--) {
  if (a[i] < index) {
    answer = false;
    break;
  }

  if (b[index - 1] === 1) {
    index--;
  } else {
    b[index - 1]--;
  }
}

console.log(answer ? "YES" : "NO");