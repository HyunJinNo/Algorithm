const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();
const x = Number(input);

console.log(x <= 12 ? x : x + 1);