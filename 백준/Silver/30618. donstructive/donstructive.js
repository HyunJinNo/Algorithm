const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

const N = Number(input); // 수열의 길이, 1 <= N <= 200_000
const arr = new Int32Array(N);
let leftIndex = 0;
let rightIndex = N - 1;

for (let num = 1; num <= N; num++) {
  if (num % 2 === 1) {
    arr[leftIndex++] = num;
  } else {
    arr[rightIndex--] = num;
  }
}

console.log(arr.join(" ").trim());