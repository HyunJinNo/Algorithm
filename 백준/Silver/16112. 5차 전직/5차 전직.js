const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// n: 퀘스트의 수
// k: 동시에 활성화할 수 있는 아케인스톤의 수
// 1 <= k <= n <= 300_000
const [n, k] = input[0].trim().split(" ").map(Number);
const a = new Int32Array(input[1].trim().split(" ").map(Number)); // 0 < a <= 100_000_000
a.sort((num1, num2) => num1 - num2);
let size = 0;
let answer = 0n;

for (let i = 0; i < n; i++) {
  answer += BigInt(a[i] * size);
  if (size < k) {
    size++;
  }
}

console.log(answer.toString());
