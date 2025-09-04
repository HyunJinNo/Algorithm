const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const [N, M, t] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [A, B, C] = input[i].split(" ").map(Number);
  graph[A].push([B, C]);
  graph[B].push([A, C]);
}

const distance = Array(N + 1).fill(Infinity);
const visited = Array(N + 1).fill(false);
visited[1] = true;
let answer = 0;

for (const [next, cost] of graph[1]) {
  distance[next] = cost;
}

for (let i = 2; i <= N; i++) {
  let nextIndex = 1;
  let minDistance = Infinity;

  for (let j = 2; j <= N; j++) {
    if (!visited[j] && distance[j] < minDistance) {
      minDistance = distance[j];
      nextIndex = j;
    }
  }

  visited[nextIndex] = true;
  answer += distance[nextIndex] + t * (i - 2);

  for (const [next, cost] of graph[nextIndex]) {
    distance[next] = Math.min(distance[next], cost);
  }
}

console.log(answer);