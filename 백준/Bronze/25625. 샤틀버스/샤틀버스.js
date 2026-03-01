const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();

// 2 <= x <= 100
// 1 <= y < 2 * x
const [x, y] = input.split(" ").map(Number);
console.log(x > y ? x + y : y - x);