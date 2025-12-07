const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let answer = "";
const N = Number(input[0]); // 팀의 수, 2 <= N <= 100
const scores = Array(N).fill(0);

for (let i = 1; i <= (N * (N - 1)) / 2; i++) {
  const [A, B, C, D] = input[i].split(" ").map(Number);

  if (C > D) {
    scores[A - 1] += 3;
  } else if (C < D) {
    scores[B - 1] += 3;
  } else {
    scores[A - 1] += 1;
    scores[B - 1] += 1;
  }
}

let rank = 1;
const copyedScores = [...scores];
const map = new Map();

copyedScores
  .sort((a, b) => b - a)
  .forEach((score) => {
    if (!map.has(score)) {
      map.set(score, rank);
    }
    rank++;
  });

for (let i = 0; i < N; i++) {
  answer += `${map.get(scores[i])}\n`;
}

console.log(answer.trim());