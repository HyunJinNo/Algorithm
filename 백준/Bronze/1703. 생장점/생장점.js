const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let index = 0;
let answer = "";

while (true) {
  const arr = input[index++].split(" ").map(Number);

  if (arr[0] === 0) {
    console.log(answer.trim());
    break;
  }

  const a = arr[0]; // 나무의 나이, 1 <= a <= 20
  let result = 1;

  for (let i = 1; i <= a * 2; i += 2) {
    result *= arr[i];
    result -= arr[i + 1];
  }

  answer += `${result}\n`;
}