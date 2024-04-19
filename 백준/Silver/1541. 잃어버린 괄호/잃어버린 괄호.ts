const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: string = require("fs").readFileSync(path).toString().trim();

let answer = 0;
let str = "";
let sign = true;
const arr: string[] = [];
const len = input.length;

for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case "+":
      if (sign) {
        answer += Number(str);
      } else {
        answer -= Number(str);
      }
      str = "";
      break;
    case "-":
      if (sign) {
        answer += Number(str);
      } else {
        answer -= Number(str);
      }
      str = "";
      sign = false;
      break;
    default:
      str += input[i];
  }
}

if (sign) {
  answer += Number(str);
} else {
  answer -= Number(str);
}

console.log(answer);
