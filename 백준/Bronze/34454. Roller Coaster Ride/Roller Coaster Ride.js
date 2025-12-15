const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]);
const C = Number(input[1]);
const P = Number(input[2]);

console.log(N <= C * P ? "yes" : "no");