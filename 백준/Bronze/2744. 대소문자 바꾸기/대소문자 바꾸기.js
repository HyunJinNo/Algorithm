const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();
let answer = "";

for (let c of input) {
  if (c.charCodeAt(0) <= 90) {
    answer += String.fromCharCode(c.charCodeAt(0) + 32);
  } else {
    answer += String.fromCharCode(c.charCodeAt(0) - 32);
  }
}

console.log(answer);
