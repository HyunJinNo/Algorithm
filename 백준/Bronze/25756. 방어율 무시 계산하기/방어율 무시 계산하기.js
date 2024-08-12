const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 물약의 개수, 1 <= N <= 40_000
const A = new Int8Array(input[1].trim().split(" ").map(Number)); // 1 <= A[i] <= 30

let V = 0;

for (const a of A) {
  V = 100 - ((100 - V) * (100 - a)) / 100;
  console.log(V);
}
