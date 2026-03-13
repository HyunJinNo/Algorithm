const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const K = Number(input[0]); // 테스트 케이스의 개수, 2 <= K <= 5
let index = 1;
let answer = "";

for (let iter = 0; iter < K; iter++) {
  // V: 정점의 개수, 1 <= V <= 20_000
  // E: 간선의 개수, 1 <= E <= 200_000
  const [V, E] = input[index++].split(" ").map(Number);
  const edges = Array.from({ length: V + 1 }, () => []);
  const graph = new Int8Array(V + 1).fill(-1);
  let visited = new Int8Array(V + 1).fill(false);

  for (let iter2 = 0; iter2 < E; iter2++) {
    const [u, v] = input[index++].split(" ").map(Number);
    edges[u].push(v);
    edges[v].push(u);
  }

  const traverse = (node) => {
    for (const nextNode of edges[node]) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        graph[nextNode] = graph[node] === 0 ? 1 : 0;
        traverse(nextNode);
      }
    }
  };

  for (let i = 1; i <= V; i++) {
    if (!visited[i]) {
      visited[i] = true;
      graph[i] = 0;
      traverse(i);
    }
  }

  let result = true;
  visited = new Int8Array(V + 1).fill(false);

  const check = (node) => {
    for (const nextNode of edges[node]) {
      if (graph[nextNode] === graph[node]) {
        result = false;
        return;
      } else if (!visited[nextNode]) {
        visited[nextNode] = true;
        check(nextNode);
      }
    }
  };

  for (let i = 1; i <= V; i++) {
    if (!visited[i]) {
      visited[i] = true;
      check(i);
    }
  }

  answer += `${result ? "YES" : "NO"}\n`;
}

console.log(answer.trim());