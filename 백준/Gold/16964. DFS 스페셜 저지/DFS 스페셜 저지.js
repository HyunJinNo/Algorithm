const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const N = Number(input[0]); // 정점의 수, 2 <= N <= 100_000
const edges = Array.from({ length: N + 1 }, () => new Set());
const visited = new Int8Array(N + 1).fill(false);
let answer = false;

for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  edges[a].add(b);
  edges[b].add(a);
}

const arr = input[N].split(" ").map(Number);
let index = 0;

const dfs = (node) => {
  if (visited[node] || arr[index++] !== node) {
    answer = false;
    return;
  }

  visited[node] = true;

  while (index < N) {
    if (edges[node].has(arr[index])) {
      dfs(arr[index]);
    } else {
      break;
    }
  }

  if (index === N) {
    answer = true;
  }
};

dfs(1);

console.log(answer ? 1 : 0);