const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 도시의 개수, 2 <= N <= 50
const arr = [];
const edges = Array.from({ length: N }, () => []);
const inDegree = Array(N).fill(0);
let result = true;

for (let i = 1; i <= N; i++) {
  arr.push(input[i].trim().split(""));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] !== arr[j][i] && arr[i][j] === "Y") {
      edges[i].push(j);
      inDegree[j]++;
    }
  }
}

const queue = [];
let peekIndex = 0;

for (let i = 0; i < N; i++) {
  if (inDegree[i] === 0) {
    queue.push(i);
  }
}

while (peekIndex < queue.length) {
  const node = queue[peekIndex++];

  edges[node].forEach((nextNode) => {
    inDegree[nextNode]--;

    if (inDegree[nextNode] === 0) {
      queue.push(nextNode);
    }
  });
}

for (let i = 0; i < N; i++) {
  if (inDegree[i] !== 0) {
    result = false;
    break;
  }
}

console.log(result ? "YES" : "NO");