const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();

// 1 <= A, B, C <= 1_000_000
const [A, B, C] = input.split(" ").map(Number);
console.log(Math.floor(Math.max((A * B) / C, (A / B) * C)));