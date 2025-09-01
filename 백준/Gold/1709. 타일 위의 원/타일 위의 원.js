const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 2 <= N <= 150_000_000, N % 2 === 0
const temp = (N / 2) * (N / 2);
let answer = N / 2;

for (let x = 1; x < N / 2; x++) {
  const a = temp - x * x;
  const b = Math.floor(Math.sqrt(a));
  if (a !== b * b) {
    answer++;
  }
}

console.log(answer * 4);