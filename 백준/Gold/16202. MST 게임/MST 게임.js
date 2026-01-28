const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 그래프 정점의 개수, 2 <= N <= 1_000
// M: 그래프 간선의 개수, 1 <= M <= Math.min(10_000, N * (N - 1) / 2)
// K: 턴의 수, 1 < K <= 100
const [N, M, K] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N }, () => []);
const answer = [];

for (let i = 1; i <= M; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x - 1].push([y - 1, i]);
  graph[y - 1].push([x - 1, i]);
}

for (let i = 0; i < K; i++) {
  if (i !== 0 && answer[answer.length - 1] === 0) {
    answer.push(0);
    continue;
  }

  let edges = [];
  const distance = Array(N).fill(Infinity);
  const visited = Array(N).fill(false);
  visited[0] = true;

  for (const [nextNode, weight] of graph[0]) {
    distance[nextNode] = Math.min(distance[nextNode], weight);
  }

  loop: for (let iter = 0; iter < N - 1; iter++) {
    let targetNode = 0;
    let minDistance = Infinity;

    for (let j = 1; j < N; j++) {
      if (!visited[j] && distance[j] < minDistance) {
        targetNode = j;
        minDistance = distance[j];
      }
    }

    if (targetNode === 0) {
      edges = [[0, 0]];
      break loop;
    }

    visited[targetNode] = true;
    edges.push([targetNode, minDistance]);

    for (const [nextNode, weight] of graph[targetNode]) {
      distance[nextNode] = Math.min(distance[nextNode], weight);
    }
  }

  answer.push(edges.reduce((total, current) => total + current[1], 0));
  edges.sort((a, b) => a[1] - b[1]);

  for (let j = 0; j < N; j++) {
    for (let k = 0; k < graph[j].length; k++) {
      if (graph[j][k][1] === edges[0][1]) {
        graph[j][k][1] = Infinity;
      }
    }
  }
}

console.log(answer.join(" "));