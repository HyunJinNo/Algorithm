const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 버퍼의 크기, 1 <= N <= 100_000
const buffer = [];
let peekIndex = 0;
let index = 1;

while (true) {
  const num = Number(input[index++]);

  if (num === -1) {
    break;
  } else if (num === 0 && buffer.length - peekIndex > 0) {
    peekIndex++;
  } else if (num > 0 && buffer.length - peekIndex < N) {
    buffer.push(num);
  }
}

console.log(buffer.length - peekIndex > 0 ? buffer.slice(peekIndex).join(" ") : "empty");