const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 친구들의 수, 1 <= N <= 10_000
const arr = input[1].trim().split(" ");

console.log(
  arr.reduce((total, value) => {
    if (value === input[2].trim()) {
      return total + 1;
    } else {
      return total;
    }
  }, 0)
);