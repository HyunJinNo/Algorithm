const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();
const n = Number(input); // -1_000_000 <= n <= 1_000_000
const arr = [0, 1];

for (let i = 2; i <= Math.abs(n); i++) {
  arr.push((arr[i - 2] + arr[i - 1]) % 1_000_000_000);
}

if (n === 0) {
  console.log(0);
} else if (n < 0 && n % 2 === 0) {
  console.log(-1);
} else {
  console.log(1);
}
console.log(arr[Math.abs(n)]);
