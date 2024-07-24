const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

const arr = Array(26).fill(0);
for (const c of input) {
  arr[c.charCodeAt(0) - "a".charCodeAt(0)]++;
}

let answer = "";
for (const num of arr) {
  answer += `${num} `;
}
console.log(answer);
