const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();
const A = Number(input);

console.log(Math.floor(A / 5));
