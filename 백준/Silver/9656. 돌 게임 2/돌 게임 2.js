const path = (process.platform === "linux") ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(path).toString();
const n = Number(input); // 돌의 개수, 1 <= n <= 1,000

if (n % 2 == 0) {
  console.log("SK");
} else {
  console.log("CY");
}