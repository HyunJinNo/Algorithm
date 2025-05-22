const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const X = Number(input[0]);
const Y = Number(input[1]);

console.log(X + Y + 3);
