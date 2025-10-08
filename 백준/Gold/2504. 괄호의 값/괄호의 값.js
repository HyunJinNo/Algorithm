const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();
const length = input.length; // 1 <= length <= 30
const stack = [input[0]];

const pushNumber = (num) => {
  if (Number.isSafeInteger(stack[stack.length - 1])) {
    const lastNum = stack.pop();
    stack.push(lastNum + num);
  } else {
    stack.push(num);
  }
};

loop: for (let i = 1; i < length; i++) {
  switch (input[i]) {
    case "(":
    case "[":
      stack.push(input[i]);
      break;
    case ")":
      if (stack.length === 0 || stack[stack.length - 1] === "[") {
        break loop;
      }

      if (stack[stack.length - 1] === "(") {
        stack.pop();
        pushNumber(2);
      } else if (
        stack.length >= 2 &&
        Number.isSafeInteger(stack[stack.length - 1]) &&
        stack[stack.length - 2] === "("
      ) {
        const num = stack.pop();
        stack.pop();
        pushNumber(num * 2);
      } else {
        stack.push(input[i]);
      }
      break;
    case "]":
      if (stack.length === 0 || stack[stack.length - 1] === "(") {
        break loop;
      }

      if (stack[stack.length - 1] === "[") {
        stack.pop();
        pushNumber(3);
      } else if (
        stack.length >= 2 &&
        Number.isSafeInteger(stack[stack.length - 1]) &&
        stack[stack.length - 2] === "["
      ) {
        const num = stack.pop();
        stack.pop();
        pushNumber(num * 3);
      } else {
        stack.push(input[i]);
      }
      break;
    default:
      break;
  }
}

if (stack.length === 1 && Number.isSafeInteger(stack[0])) {
  console.log(stack[0]);
} else {
  console.log(0);
}