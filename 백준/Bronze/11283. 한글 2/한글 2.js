const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().trim();

console.log(input.charCodeAt(0) - "가".charCodeAt(0) + 1);
