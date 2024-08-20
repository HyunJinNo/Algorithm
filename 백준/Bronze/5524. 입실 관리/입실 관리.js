const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 1 <= N <= 100

for (let i = 1; i <= N; i++) {
  console.log(input[i].trim().toLowerCase());
}
