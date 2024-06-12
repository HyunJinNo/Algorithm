const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const len = input.length;
let answer = "";
let reverse = true;
const stack = [];

const flush = () => {
  const size = stack.length;
  for (let i = 0; i < size; i++) {
    answer += stack.pop();
  }
};

for (let i = 0; i < len; i++) {
  const c = input[i];

  switch (c) {
    case " ":
      flush();
      answer += c;
      break;
    case "<":
      flush();
      answer += c;
      reverse = false;
      break;
    case ">":
      reverse = true;
      answer += c;
      break;
    default:
      if (reverse) {
        stack.push(c);
      } else {
        answer += c;
      }
      break;
  }
}

flush();
console.log(answer);
