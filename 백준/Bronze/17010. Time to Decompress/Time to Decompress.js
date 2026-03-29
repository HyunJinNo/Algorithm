const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const L = Number(input[0]);
let answer = "";

for (let i = 1; i <= L; i++) {
  const temp = input[i].trim().split(" ");
  const N = Number(temp[0]);
  const x = temp[1];
  answer += `${x.repeat(N)}\n`;
}

console.log(answer.trim());