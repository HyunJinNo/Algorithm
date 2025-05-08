const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 노드의 개수, 2 <= N <= 200_000
// M: 질문의 횟수, 1 <= M <= 200_000
// V: N번 노드가 가리키는 노드의 번호, 2 <= V <= N
const [N, M, V] = input[0].split(" ").map(Number);
const C = input[1].split(" ").map(Number); // 1 <= C[i] <= 1_000_000
let answer = "";

for (let i = 2; i < 2 + M; i++) {
  let K = Number(input[i]); // 1 <= K <= 1_000_000_000

  if (K < N) {
    answer += `${C[K]}\n`;
  } else {
    K -= N;
    answer += `${C[(K % (N - V + 1)) + V - 1]}\n`;
  }
}

console.log(answer.trim());
