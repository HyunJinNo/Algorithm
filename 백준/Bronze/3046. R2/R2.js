const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

// -1000 <= R1 <= 1000
// -1000 <= S <= 1000
const [R1, S] = input.trim().split(" ").map(Number);
console.log(S * 2 - R1);
