const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const a = BigInt(input[0]);
const b = BigInt(input[1]);

console.log(((a - b) / 2n + b).toString());
console.log(((a - b) / 2n).toString());