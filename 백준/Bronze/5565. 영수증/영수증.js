const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const total = Number(input[0]);
let sum = 0;

for (let i = 1; i <= 9; i++) {
  sum += Number(input[i]);
}

console.log(total - sum);