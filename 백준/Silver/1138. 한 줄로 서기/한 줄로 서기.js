const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 사람의 수, 1 <= N <= 10
const arr = input[1].split(" ").map(Number);
const answer = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (count === arr[i] && answer[j] === 0) {
      answer[j] = i + 1;
      break;
    }

    if (answer[j] === 0) {
      count++;
    }
  }
}

console.log(answer.toString().replaceAll(",", " "));
