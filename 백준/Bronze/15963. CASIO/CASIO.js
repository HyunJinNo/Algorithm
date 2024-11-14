const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split(" ");

console.log(input[0].trim() === input[1].trim() ? 1 : 0);
