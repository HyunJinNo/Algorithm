const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

console.log(
  arr.reduce((total, current) => {
    if (current === N) {
      total++;
    }

    return total;
  }, 0)
);
