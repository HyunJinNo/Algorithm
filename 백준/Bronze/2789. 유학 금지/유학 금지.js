const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const str = "CAMBRIDGE";
let answer = input;

for (const c of str) {
  answer = answer.replaceAll(c, "");
}

console.log(answer);
