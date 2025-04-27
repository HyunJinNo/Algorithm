const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 과일의 종류 수, 1 <= N <= 10
const M = Number(input[1]); // 훔치려 하는 과일의 개수, N <= M <= 30
let answer = 0;

const solution = (depth, index) => {
  for (let i = index; i < M - 1; i++) {
    if (depth === N - 1) {
      answer++;
    } else {
      solution(depth + 1, i + 1);
    }
  }
};

if (N === 1) {
  answer = 1;
} else {
  solution(1, 0);
}

console.log(answer);
