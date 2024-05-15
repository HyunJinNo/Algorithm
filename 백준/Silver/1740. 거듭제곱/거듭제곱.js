const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const N = Number(input); // 1 <= N <= 500_000_000_000
const binary = N.toString(2);

let answer = BigInt(0);
let multiplier = BigInt(1);
const length = binary.length;

for (let i = length - 1; i >= 0; i--) {
  if (binary[i] === "1") {
    answer += BigInt(multiplier);
  }
  multiplier *= BigInt(3);
}

console.log(answer.toString());
