const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require('fs').readFileSync(path).toString();
const n = Number(input); // 1 <= n <= 1,000,000,000

const num = n ^ ((~n) + 1);
let result = 0;

for (let i = 0; i < 32; i++) {
  const mask = 1 << i;
  if ((num & mask) === mask) {
    result++;
  }
}

console.log(result);