const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();

const N = Number(input); // 1 <= N <= 100
const arr = Array(N).fill(0);
let num = N;

if (N % 2 === 0) {
  for (let i = N - 2; i >= 0; i -= 2) {
    arr[i] = num--;
  }
} else {
  for (let i = N - 1; i >= 0; i -= 2) {
    arr[i] = num--;
  }
}

for (let i = 1; i < N; i += 2) {
  arr[i] = num--;
}

console.log(arr.toString().replaceAll(",", " "));