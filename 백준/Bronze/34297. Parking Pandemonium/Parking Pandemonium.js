const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const M = Number(input[0]);
const C = Number(input[2]);

console.log(M * C);