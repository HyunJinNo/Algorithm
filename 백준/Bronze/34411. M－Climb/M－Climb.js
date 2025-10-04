const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const m = Number(input[0]); // 0 <= m <= 1_000
const n = Number(input[1]); // 0 <= n <= 1_000

console.log(m * n);