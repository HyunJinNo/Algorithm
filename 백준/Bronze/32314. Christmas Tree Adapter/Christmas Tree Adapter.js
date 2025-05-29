const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const A = Number(input[0]); // 1 <= A <= 20
const [W, V] = input[1].split(" ").map(Number); // 1 <= W <= 2_000, 1 <= V <= 100

console.log(A <= W / V ? 1 : 0);
