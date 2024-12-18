const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const arr1 = input[i * 2 - 1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const arr2 = input[i * 2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (
    arr1[2] * arr1[2] === arr1[0] * arr1[0] + arr1[1] * arr1[1] &&
    arr2[2] * arr2[2] === arr2[0] * arr2[0] + arr2[1] * arr2[1] &&
    arr1[0] === arr2[0] &&
    arr1[1] === arr2[1] &&
    arr1[2] === arr2[2]
  ) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
