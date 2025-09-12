const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 1 <= n <= 100_000
// 0 <= m <= n
const [n, m] = input[0].split(" ").map(Number);
const T = input[1].split(" ").map(Number); // 0 < T[i] <= 1_000_000
let answer = 0;

for (let i = 0; i < m; i++) {
  answer += T[i];
}

let sum = answer;

for (let i = m; i < n; i++) {
  sum += T[i] - T[i - m];
  answer = Math.max(answer, sum);
}

console.log(answer);