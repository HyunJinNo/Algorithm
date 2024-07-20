const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let sum = 0;

for (let i = 0; i < 5; i++) {
  sum += Math.max(Number(input[i].trim()), 40);
}
console.log(sum / 5);
