const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

/**
 * N: 도시의 개수, 2 <= N <= 300_000
 * M: 도로의 개수, 1 <= M <= 1_000_000
 * K: 거리 정보, 1 <= K <= 300_000
 * X: 출발 도시의 번호, 1 <= X <= N
 */
const [N, M, K, X] = input[0].split(" ").map(Number);
const graph = Array(N + 1).fill([]);

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  graph[start] = [...graph[start], end];
}

const visited = Array(N + 1).fill(false);
const dist = new Int32Array(N + 1).fill(300001);
const edges = [];
let index = 0;
let length = 0;

visited[X] = true;
dist[X] = 0;
graph[X].forEach((end) => {
  visited[end] = true;
  edges.push([end, 1]);
  length++;
});

while (index < length) {
  const data = edges[index++];
  visited[data[0]] = true;
  dist[data[0]] = data[1];

  graph[data[0]].forEach((end) => {
    if (!visited[end]) {
      visited[end] = true;
      edges.push([end, data[1] + 1]);
      length++;
    }
  });
}

let answer = [];

for (let i = 0; i < N + 1; i++) {
  if (K === dist[i]) {
    answer.push(i);
  }
}

if (answer.length === 0) {
  console.log(-1);
} else {
  console.log(answer.join("\n"));
}
