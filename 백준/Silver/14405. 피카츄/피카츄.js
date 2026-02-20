const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
let index = 0;
let flag = true;

while (index < input.length) {
  if (index + 1 < input.length && input[index] === "p" && input[index + 1] === "i") {
    index += 2;
  } else if (index + 1 < input.length && input[index] === "k" && input[index + 1] === "a") {
    index += 2;
  } else if (index + 2 < input.length && input[index] === "c" && input[index + 1] === "h" && input[index + 2] === "u") {
    index += 3;
  } else {
    flag = false;
    break;
  }
}

console.log(flag ? "YES" : "NO");