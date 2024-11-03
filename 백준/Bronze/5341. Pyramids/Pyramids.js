const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const base = Number(input[i]);

  if (base === 0) {
    break;
  }

  console.log((base * (base + 1)) / 2);
}
