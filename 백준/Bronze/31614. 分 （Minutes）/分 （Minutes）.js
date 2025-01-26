const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const hour = Number(input[0]);
const minute = Number(input[1]);

console.log(hour * 60 + minute);
