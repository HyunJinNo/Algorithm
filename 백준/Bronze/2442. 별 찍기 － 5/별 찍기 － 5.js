const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 1 <= N <= 100

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N * 2 - (N - i); j++) {
    if (j < N - i - 1) {
      process.stdout.write(" ");
    } else {
      process.stdout.write("*");
    }
  }
  console.log();
}
