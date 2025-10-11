const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const n = Number(input[0]); // 사람 수, 2 <= n <= 100
const x = Number(input[1]); // 사람 사이의 권장 거리, 3 <= x <= 100

console.log(x * (n - 1));