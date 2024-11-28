const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const arr = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(`Scenario #${i}:`);
  console.log(
    `${arr[2] * arr[2] === arr[1] * arr[1] + arr[0] * arr[0] ? "yes" : "no"}`,
  );
  console.log();
}
