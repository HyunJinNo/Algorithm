const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
const X = Number(input); // 1 <= X <= 100

console.log(X % 7 === 2 ? 1 : 0);
