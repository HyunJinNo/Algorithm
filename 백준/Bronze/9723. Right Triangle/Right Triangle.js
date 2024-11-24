const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [a, b, c] = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  console.log(`Case #${i}: ${c * c === a * a + b * b ? "YES" : "NO"}`);
}