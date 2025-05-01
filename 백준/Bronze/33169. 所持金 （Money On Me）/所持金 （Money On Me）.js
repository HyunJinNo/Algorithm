const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const A = Number(input[0]); // 1 <= A <= 100
const B = Number(input[1]); // 1 <= B <= 100
console.log(1000 * A + 10000 * B);
