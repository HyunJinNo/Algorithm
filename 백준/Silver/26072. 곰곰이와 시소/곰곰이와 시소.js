const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 치킨의 수
// L: 시소의 길이
// 1 <= N, L <= 100_000
const [N, L] = input[0].split(" ").map(Number);
const x = input[1].split(" ").map(Number); // 0 <= x[i] <= L
const w = input[2].split(" ").map(Number); // 1 <= w[i] <= 100_000
let sum1 = x.reduce((total, current, index) => total + current * w[index], 0);
let sum2 = w.reduce((total, current) => total + current, 0);

console.log(sum1 / sum2);