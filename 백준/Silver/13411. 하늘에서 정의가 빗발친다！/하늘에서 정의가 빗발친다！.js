const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 1 <= N <= 100_000
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push([i, ...input[i].split(" ").map(Number)]);
}

arr.sort((a, b) => {
  const time1 = Math.sqrt(a[1] * a[1] + a[2] * a[2]) / a[3];
  const time2 = Math.sqrt(b[1] * b[1] + b[2] * b[2]) / b[3];
  return time1 - time2;
});

console.log(
  arr.reduce((total, current) => (total += `${current[0]}\n`), "").trim(),
);
