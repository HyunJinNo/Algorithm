const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

let answer = "";
const N = Number(input);

for (let i = 0; i < N; i++) {
  answer += `SciComLove\n`;
}

console.log(answer.trim());
