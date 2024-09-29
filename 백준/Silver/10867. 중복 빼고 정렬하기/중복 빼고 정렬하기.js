const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const arr = Array.from(new Set(input[1].trim().split(" ").map(Number)));

arr.sort((a, b) => a - b);
let answer = "";

arr.forEach((value) => {
  answer += `${value} `;
});

console.log(answer.trim());