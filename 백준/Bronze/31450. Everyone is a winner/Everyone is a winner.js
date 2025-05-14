const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
const [M, K] = input.split(" ").map(Number);

console.log(M % K === 0 ? "Yes" : "No");
