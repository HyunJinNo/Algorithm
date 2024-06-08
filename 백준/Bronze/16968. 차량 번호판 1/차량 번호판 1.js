const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const str = require("fs").readFileSync(path).toString().trim(); // 1 <= str.length <= 4
const len = str.length;
let answer = 0;

if (str[0] === "c") {
  answer = 26;
} else {
  answer = 10;
}

for (let i = 1; i < len; i++) {
  if (str[i] === "c") {
    if (str[i - 1] === "c") {
      answer *= 25;
    } else {
      answer *= 26;
    }
  } else {
    if (str[i - 1] === "d") {
      answer *= 9;
    } else {
      answer *= 10;
    }
  }
}

console.log(answer);
