const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const [N, M] = input.split(" ").map(Number);
console.log(Math.abs(N - M));
