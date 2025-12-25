const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const length = input.length;
let answer = 0;

for (let i = 0; i < length; i++) {
  answer += (input.charCodeAt(i) - "A".charCodeAt(0) + 1) * Math.pow(26, length - i - 1);
}

console.log(answer);