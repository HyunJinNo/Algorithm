const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
let str = "";
let answer = "";

switch (input.length % 3) {
  case 1:
    str = "00" + input;
    break;
  case 2:
    str = "0" + input;
    break;
  default:
    str = input;
    break;
}

for (let i = 0; i < str.length; i += 3) {
  answer += `${parseInt(str.slice(i, i + 3), 2)}`;
}

console.log(answer);