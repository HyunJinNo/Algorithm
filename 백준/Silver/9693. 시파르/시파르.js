const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let index = 0;
let answer = "";

while (true) {
  const N = Number(input[index++]); // 5 <= N <= 1_000_000

  if (N === 0) {
    break;
  }

  let result = 0;

  for (let num = N; num >= 5; num--) {
    let value = num;
    while (value % 5 === 0) {
      result++;
      value /= 5;
    }
  }

  answer += `Case #${index}: ${result}\n`;
}

console.log(answer.trim());
