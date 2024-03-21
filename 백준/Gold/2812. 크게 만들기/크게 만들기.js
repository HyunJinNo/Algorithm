const path = (process.platform === "linux") ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(path).toString().split("\n");

// 1 <= k <= n <= 500,000
let [n, k] = input[0].split(" ").map(Number);
const num = input[1];
const stack = [];

for (let i = 0; i < num.length; i++) {
  const temp = Number(num[i]);
  while (stack.length > 0 && k > 0 && stack[stack.length - 1] < temp) {
    stack.pop();
    k--;
  }
  stack.push(temp);
}

for (let i = 0; i < k; i++) {
  stack.pop();
}

console.log(stack.join(""));