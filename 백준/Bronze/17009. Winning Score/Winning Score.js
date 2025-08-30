const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const sum1 = Number(input[0]) * 3 + Number(input[1]) * 2 + Number(input[2]);
const sum2 = Number(input[3]) * 3 + Number(input[4]) * 2 + Number(input[5]);

console.log(sum1 > sum2 ? "A" : sum1 < sum2 ? "B" : "T");