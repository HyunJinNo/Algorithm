const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const w = Number(input[0]);
const l = Number(input[1]);

console.log(w * l);