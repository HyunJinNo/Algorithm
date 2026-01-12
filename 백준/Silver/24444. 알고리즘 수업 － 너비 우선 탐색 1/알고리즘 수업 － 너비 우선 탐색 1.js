const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 정점의 수, 5 <= N <= 100_000
// M: 간선의 수, 1 <= M <= 200_000
// R: 시작 정점, 1 <= R <= N
const [N, M, R] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const answer = Array(N + 1).fill(0);
answer[R] = 1;
let count = 2;

const queue = [R];
let peekIndex = 0;

while (queue.length > peekIndex) {
  const u = queue[peekIndex++];

  for (let v of graph[u]) {
    if (answer[v] === 0) {
      queue.push(v);
      answer[v] = count++;
    }
  }
}

console.log(answer.slice(1).join("\n").trim());