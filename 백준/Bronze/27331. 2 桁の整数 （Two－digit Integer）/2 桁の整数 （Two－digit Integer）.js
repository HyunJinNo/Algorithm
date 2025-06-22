const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const A = Number(input[0]);
const B = Number(input[1]);

console.log(`${A}${B}`);
