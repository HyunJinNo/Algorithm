const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const [hour, minute] = input.split(" ").map(Number);

console.log(hour * 60 + minute - 540);
