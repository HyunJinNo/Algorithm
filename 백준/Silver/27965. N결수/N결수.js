const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

// 1 <= N <= 10_000_000
// 1 <= K <= 1_000_000_000
const [N, K] = input.split(" ").map(Number);
let answer = 0;

for (let num = 1; num <= N; num++) {
  let temp = num;

  while (temp > 0) {
    temp = Math.floor(temp / 10);
    answer *= 10;
    answer %= K;
  }

  answer += num;
  answer %= K;
}

console.log(answer);