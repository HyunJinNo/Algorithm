const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 수열의 크기, 1 <= n <= 100_000
const arr = new Int32Array(input[1].split(" ").map(Number)); // 1 <= arr[i] <= 1_000_000
const x = Number(input[2]); // 1 <= x <= 2_000_000
let answer = 0;
let i = 0;
let j = n - 1;

arr.sort((a, b) => a - b);

while (i >= 0 && j < n && i < j) {
  if (arr[i] + arr[j] === x) {
    answer++;
    i++;
    j--;
  } else if (arr[i] + arr[j] > x) {
    j--;
  } else {
    i++;
  }
}

console.log(answer);
