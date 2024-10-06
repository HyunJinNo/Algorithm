const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const [H, I, A, R, C] = input.trim().split(" ").map(Number);
console.log(H * I - A * R * C);
