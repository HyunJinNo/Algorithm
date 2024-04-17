const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: string = require("fs").readFileSync(path).toString().trim();
const stack: string[] = [];
const len = input.length; // 1 <= len <= 1_000_000
let size = 0;

for (let i = 0; i < len; i++) {
  stack.push(input[i]);
  size++;

  while (
    size >= 4 &&
    stack[size - 4] === "P" &&
    stack[size - 3] === "P" &&
    stack[size - 2] === "A" &&
    stack[size - 1] === "P"
  ) {
    for (let iter = 0; iter < 3; iter++) {
      stack.pop();
    }
    size -= 3;
  }
}

if (size === 1 && stack[0] === "P") {
  console.log("PPAP");
} else {
  console.log("NP");
}
