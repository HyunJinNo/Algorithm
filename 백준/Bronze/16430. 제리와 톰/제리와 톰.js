const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const [A, B] = input.trim().split(" ").map(Number);
console.log(B - A, B);
