const path = (process.platform === "linux") ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(path).toString().trim();

let answer = 0;
const arr = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    arr.push("(");
  } else {
    arr.pop();
    if (input[i - 1] === "(") {
      answer += arr.length;
    } else {
      answer++;
    }
  }
}

console.log(answer);