const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 물이 새는 곳의 개수, 1 <= N <= 1_000
// L: 테이프의 길이, 1 <= L <= 1_000
const [N, L] = input[0].trim().split(" ").map(Number);
const arr = new Int16Array(input[1].trim().split(" ").map(Number)); // 1 <= arr[i] <= 1_000
arr.sort((a, b) => a - b);

let answer = 0;
let end = -1;

for (let i = 0; i < N; i++) {
  if (arr[i] > end) {
    end = arr[i] + L - 1;
    answer++;
  }
}

console.log(answer);
