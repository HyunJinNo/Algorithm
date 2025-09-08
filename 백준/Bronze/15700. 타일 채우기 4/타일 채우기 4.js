const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();

// 1 <= N, M <= 1_000_000_000
const [N, M] = input.split(" ").map(BigInt);

console.log(((N * M) / 2n).toString());