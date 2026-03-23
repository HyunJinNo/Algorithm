const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
const N = Number(input); // 1 <= N <= 100
const answer = `${"*".repeat(N)}\n`.repeat(N);

console.log(answer.trim());