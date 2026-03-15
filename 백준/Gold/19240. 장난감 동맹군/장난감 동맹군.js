const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const T = Number(input[0]); // 테스트 케이스의 수, 1 <= T <= 10
let index = 1;
let answer = "";

for (let iter = 0; iter < T; iter++) {
  // N: 장난감의 수, 3 <= N <= 300_000
  // M: 동맹이 될 수 없는 장난감 쌍의 수, 1 <= M <= 300_000
  const [N, M] = input[index++].split(" ").map(Number);
  const edges = Array.from({ length: N + 1 }, () => []);
  const graph = new Int8Array(N + 1).fill(0);

  for (let iter2 = 0; iter2 < M; iter2++) {
    const [x, y] = input[index++].split(" ").map(Number);
    edges[x].push(y);
    edges[y].push(x);
  }

  const traverse = (node) => {
    for (const nextNode of edges[node]) {
      if (graph[nextNode] === 0) {
        graph[nextNode] = graph[node] === 1 ? 2 : 1;
        traverse(nextNode);
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    if (graph[i] === 0) {
      graph[i] = 1;
      traverse(i);
    }
  }

  let result = true;

  const check = (node) => {
    for (const nextNode of edges[node]) {
      if (graph[nextNode] === graph[node]) {
        result = false;
        return;
      } else if (graph[nextNode] === 1 || graph[nextNode] === 2) {
        graph[nextNode] *= -1;
        check(nextNode);
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    if (graph[i] === 1 || graph[i] === 2) {
      graph[i] *= -1;
      check(i);
    }
  }

  answer += `${result ? "YES" : "NO"}\n`;
}

console.log(answer.trim());