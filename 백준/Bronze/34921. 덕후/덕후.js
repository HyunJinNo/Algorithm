const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();

const [A, T] = input.split(" ").map(Number);
const P = 10 + 2 * (25 - A + T);

console.log(Math.max(P, 0));