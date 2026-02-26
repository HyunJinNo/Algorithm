const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const arr = input.split("").map(Number);
let answer = 0;
let count = 1;

for (let i = 1; i < input.length; i++) {
  if (arr[i - 1] + 1 === arr[i]) {
    count++;
  } else {
    if (count === 3) {
      answer++;
    }

    count = 1;
  }
}

if (count === 3) {
  answer++;
}

console.log(answer);