const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const arr = input.trim().split(" ").map(Number); // 1 <= arr[i] <= 1_000_000

arr.sort((a, b) => a - b);
console.log(arr[0], arr[1], arr[2]);
