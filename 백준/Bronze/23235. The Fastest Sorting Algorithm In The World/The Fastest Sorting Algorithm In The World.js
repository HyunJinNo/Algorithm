const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const length = input.length;
let answer = "";

for (let i = 0; i < length; i++) {
  const arr = input[i].split(" ").map(Number);
  if (arr[0] === 0) {
    break;
  } else {
    answer += `Case ${i + 1}: Sorting... done!\n`;
  }
}

process.stdout.write(answer.trim());
