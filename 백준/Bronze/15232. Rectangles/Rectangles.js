const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const R = Number(input[0]);
const C = Number(input[1]);
let answer = "";

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    answer += "*";
  }
  answer += "\n";
}

process.stdout.write(answer.trim());
