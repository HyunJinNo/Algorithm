const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 전장에 놓인 칸의 개수, 3 <= N <= 200_000

if (N % 2 === 0) {
  console.log("Duck");
} else {
  console.log("Goose");
}
