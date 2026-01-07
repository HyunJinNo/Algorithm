const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();
const x = Number(input); // 0 <= x <= 7

console.log(x >= 6 ? "Success!" : "Oh My God!");