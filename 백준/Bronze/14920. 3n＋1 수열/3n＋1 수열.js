const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

let num = Number(input);
let answer = 1;

while (num !== 1) {
  if (num % 2 === 0) {
    num /= 2;
  } else {
    num = num * 3 + 1;
  }

  answer++;
}

console.log(answer);
