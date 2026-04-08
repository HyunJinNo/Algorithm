const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

// 2 <= k <= 50
// 1 <= s <= 50
const [k, s] = input.split(" ").map(Number);
console.log(Math.floor(s / k) + (s % k));