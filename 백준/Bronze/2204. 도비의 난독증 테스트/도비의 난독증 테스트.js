const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
let index = 0;
let answer = "";

while (true) {
  const n = Number(input[index++]); // 단어의 개수, 2 <= n <= 1_000

  if (n === 0) {
    console.log(answer.trim());
    break;
  }

  const arr = [];

  for (let iter = 0; iter < n; iter++) {
    arr.push(input[index++].trim());
  }

  arr.sort((a, b) => a.localeCompare(b));

  answer += `${arr[0]}\n`;
}