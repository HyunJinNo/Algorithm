const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const arr = input.map((value) => Number(value));

console.log(Math.min(arr[0], arr[1], arr[2]) + Math.min(arr[3], arr[4]) - 50);
