const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 부원의 수, 2 <= N <= 100_000
// M: 관계의 수, 1 <= M <= 500_000
const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const inDegree = Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
  const [U, V] = input[i].split(" ").map(Number);
  graph[V].push(U);
  inDegree[U]++;
}

const queue = [];
let peekIndex = 0;
let answer = 0;

for (let i = 1; i <= N; i++) {
  if (inDegree[i] === 0) {
    queue.push(i);
    answer++;
  }
}

while (peekIndex < queue.length) {
  const node = queue[peekIndex++];

  graph[node].forEach((nextNode) => {
    inDegree[nextNode]--;

    if (inDegree[nextNode] === 0) {
      queue.push(nextNode);
      answer++;
    }
  });
}

console.log(answer);