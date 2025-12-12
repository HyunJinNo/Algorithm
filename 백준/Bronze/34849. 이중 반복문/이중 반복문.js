const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const N = Number(input); // 1 <= N <= 100_000

if (N * N <= 100_000_000) {
  console.log("Accepted");
} else {
  console.log("Time limit exceeded");
}