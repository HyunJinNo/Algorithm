const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const A = input[0].trim();
const B = input[1].trim();

console.log(A === B ? 0 : 1550);