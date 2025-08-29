const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const [A, B] = input.split(" ").map(Number); // 1 <= A , B <= 100
console.log(Math.min(Math.floor(A / 2), B));