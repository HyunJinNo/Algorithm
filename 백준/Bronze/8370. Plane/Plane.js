const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const [n1, k1, n2, k2] = input.split(" ").map(Number);
console.log(n1 * k1 + n2 * k2);
