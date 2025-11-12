const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 0 < N <= 100
const P = Number(input[2]); // 0 < P <= 20_000

console.log(N * P);