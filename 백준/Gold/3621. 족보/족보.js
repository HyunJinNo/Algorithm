const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 2 <= n <= 100_000
// 2 <= d <= n
const [n, d] = input[0].split(" ").map(Number);
const temp = new Int32Array(input[1].split(" ").map(Number));
const arr = new Int32Array(Array(n + 1).fill(0));
let answer = 0;

for (let i = 0; i < n; i++) {
  arr[temp[i]]++;
}

for (let i = 0; i <= n; i++) {
  if (arr[i] > d) {
    answer += Math.ceil((arr[i] - d) / (d - 1));
  }
}

console.log(answer);