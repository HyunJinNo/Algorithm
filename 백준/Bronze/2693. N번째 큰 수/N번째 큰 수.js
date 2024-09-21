const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 1 <= T <= 1_000

for (let i = 1; i <= T; i++) {
  const arr = input[i].trim().split(" ").map(Number);
  arr.sort((a, b) => b - a);
  console.log(arr[2]);
}
