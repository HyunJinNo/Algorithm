const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();
const [A, B, C, D] = input.split(" ").map(Number);

console.log(Number(A.toString() + B.toString()) + Number(C.toString() + D.toString()));