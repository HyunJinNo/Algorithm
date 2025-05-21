const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

const N = Number(input); // 1 <= N <= 1_000_000
const str = "WelcomeToSMUPC";
const length = str.length;

console.log(str[(N - 1) % length]);
