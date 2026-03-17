const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 개수
let index = 1;
let answer = "";

for (let iter = 0; iter < T; iter++) {
  // n: 동그라미의 개수, 1 <= n <= 1_000
  // m: 직선들의 개수, 1 <= m <= 100_000
  const [n, m] = input[index++].split(" ").map(Number);
  const edges = Array.from({ length: n + 1 }, () => []);
  const graph = new Int8Array(n + 1).fill(-1);
  let result = true;

  for (let iter2 = 0; iter2 < m; iter2++) {
    const [x, y] = input[index++].split(" ").map(Number);
    edges[x].push(y);
    edges[y].push(x);
  }

  const traverse = (node) => {
    for (const nextNode of edges[node]) {
      if (graph[nextNode] === -1) {
        graph[nextNode] = graph[node] === 0 ? 1 : 0;
        traverse(nextNode);
      } else if (graph[nextNode] === graph[node]) {
        result = false;
        return;
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    if (graph[i] === -1) {
      graph[i] = 0;
      traverse(i);
    }
  }

  answer += `${result ? "possible" : "impossible"}\n`;
}

console.log(answer.trim());