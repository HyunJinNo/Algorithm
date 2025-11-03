const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 경기의 수
// M: 위원의 수
// 1 <= N, M <= 1_000
const [N, M] = input[0].split(" ").map(Number);
const A = [];
const answer = Array(N).fill(0);

for (let i = 1; i <= N; i++) {
  A.push(Number(input[i]));
}

for (let i = N + 1; i <= N + M; i++) {
  const B = Number(input[i]);

  for (let j = 0; j < N; j++) {
    if (A[j] <= B) {
      answer[j]++;
      break;
    }
  }
}

console.log(answer.indexOf(Math.max(...answer)) + 1);