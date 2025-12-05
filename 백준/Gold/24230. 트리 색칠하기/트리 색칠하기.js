const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]); // 정점의 개수, 1 <= N <= 200_000
const C = input[1].split(" ").map(Number); // 각 정점의 색깔, 1 <= C[i] <= N
const visited = Array(N).fill(false);
const graph = Array.from({ length: N }, () => []);
let answer = 0;

for (let i = 2; i < N + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a - 1].push(b - 1);
  graph[b - 1].push(a - 1);
}

const DFS = (currentNode, currentColor) => {
  if (currentColor !== C[currentNode]) {
    answer++;
  }

  visited[currentNode] = true;

  for (const nextNode of graph[currentNode]) {
    if (!visited[nextNode]) {
      DFS(nextNode, C[currentNode]);
    }
  }
};

DFS(0, 0);

console.log(answer);