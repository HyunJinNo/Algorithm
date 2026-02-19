const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
let answer = 10;
let temp = input[0];

for (let i = 1; i < input.length; i++) {
  if (input[i] === temp) {
    answer += 5;
  } else {
    answer += 10;
  }

  temp = input[i];
}

console.log(answer);