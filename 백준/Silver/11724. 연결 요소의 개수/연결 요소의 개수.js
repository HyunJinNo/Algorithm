const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 정점의 개수, 1 <= N <= 1_000
// M: 간선의 개수, 0 <= M <= N * (N - 1) / 2
const [N, M] = input[0].trim().split(" ").map(Number);

const arr = Array.from(Array(N + 1), () => Array(N + 1).fill(false));
for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].trim().split(" ").map(Number);
  arr[u][v] = true;
  arr[v][u] = true;
}

let answer = 0;
const visited = Array(N + 1).fill(false);

const traverse = (node) => {
  for (let j = 1; j <= N; j++) {
    if (arr[node][j] && !visited[j]) {
      visited[j] = true;
      traverse(j);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (visited[i]) {
    continue;
  }

  answer++;
  traverse(i);
}

console.log(answer);
