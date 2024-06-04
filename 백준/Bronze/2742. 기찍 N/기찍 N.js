const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
let answer = "";

for (let num = Number(input); num >= 1; num--) {
  answer += `${num}\n`;
}
console.log(answer);