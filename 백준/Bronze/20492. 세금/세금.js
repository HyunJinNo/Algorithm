const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const N = Number(input);
console.log(`${(N * 78) / 100} ${(N * 956) / 1000}`);
