const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 수열 S의 크기, 1 <= N <= 20
const S = input[1].split(" ").map(Number); // 1 <= S[i] <= 100_000
let answer = 1;
const numSet = new Set();

const solution = (index, total) => {
  if (index >= N) {
    numSet.add(total);
    while (numSet.has(answer)) {
      answer++;
    }

    return;
  }

  solution(index + 1, total);
  solution(index + 1, total + S[index]);
};

solution(0, 0);

console.log(answer);
