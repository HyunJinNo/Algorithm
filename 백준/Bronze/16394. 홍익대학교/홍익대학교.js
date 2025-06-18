const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
const N = Number(input); // 1946 <= N <= 1_000_000
console.log(N - 1946);
