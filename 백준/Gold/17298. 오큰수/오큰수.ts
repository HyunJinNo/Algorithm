const path: string = (process.platform === "linux") ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs").readFileSync(path).toString().split("\n");

const n: number = Number(input[0]); // 수열 A의 크기, 1 <= n <= 1,000,000
const A: number[] = input[1].split(" ").map(Number);
const stack = [A[n - 1]];
const result = Array(n);
result[n - 1]= -1;

for (let i = n - 2; i >= 0; i--) {
  while (stack.length > 0 && A[i] >= stack[stack.length - 1]) {
    stack.pop();
  }

  if (stack.length === 0) {
    result[i] = -1;
  } else {
    result[i] = stack[stack.length - 1];
  }

  stack.push(A[i]);
}

console.log(result.join(" "));