const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

// 1 <= N <= 300
// 1 <= M <= 300
const [N, M] = input.split(" ").map(Number);

console.log(N * M - 1);