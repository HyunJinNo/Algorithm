const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const [A, B, X] = input[i].split(" ").map(Number);
  console.log(A * (X - 1) + B);
}
