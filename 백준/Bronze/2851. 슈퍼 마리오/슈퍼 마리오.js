const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

let answer = 0;
for (let i = 0; i < 10; i++) {
  const num = Number(input[i]);
  if (Math.abs(answer - 100) >= Math.abs(answer + num - 100)) {
    answer += num;
  } else {
    break;
  }
}

console.log(answer);
