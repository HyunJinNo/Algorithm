const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 수행해야 할 작업의 수, 3 <= N <= 10_000

const graph = Array.from({ length: N + 1 }, () => []);
const inDegree = Array(N + 1).fill(0);
const cost = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  const arr = input[i].split(" ").map(Number);
  const time = arr[0]; // 각각의 작업마다 걸리는 시간, 1 <= time <= 100
  const count = arr[1]; // 선행 관계에 있는 작업들의 개수, 0 <= count <= 100

  cost[i] = time;

  for (let j = 2; j < 2 + count; j++) {
    graph[arr[j]].push(i);
    inDegree[i]++;
  }
}

const answer = Array(N + 1).fill(0);
const queue = [];
let peekIndex = 0;

for (let i = 1; i <= N; i++) {
  if (inDegree[i] === 0) {
    answer[i] = cost[i];
    queue.push([i, cost[i]]); // [node, totalTime]
  }
}

while (peekIndex < queue.length) {
  const [node, totalTime] = queue[peekIndex++];

  graph[node].forEach((nextNode) => {
    inDegree[nextNode]--;
    answer[nextNode] = Math.max(answer[nextNode], totalTime + cost[nextNode]);

    if (inDegree[nextNode] === 0) {
      queue.push([nextNode, answer[nextNode]]);
    }
  });
}

console.log(Math.max(...answer));