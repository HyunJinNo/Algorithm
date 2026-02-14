const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 헛간의 개수, 2 <= N <= 20_000
// M: 길의 수, 1 <= M <= 50_000
const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

const distance = Array(N + 1).fill(-1);
distance[1] = 0;

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const queue = [...graph[1]];
let peekIndex = 0;

for (const nextNode of graph[1]) {
  distance[nextNode] = 1;
}

while (peekIndex < queue.length) {
  const target = queue[peekIndex++];

  for (const nextNode of graph[target]) {
    if (distance[nextNode] === -1) {
      queue.push(nextNode);
      distance[nextNode] = distance[target] + 1;
    }
  }
}

const answer = [0, 0, 0]; // [숨어야 하는 헛간 번호, 그 헛간까지의 거리, 그 헛간과 같은 거리를 갖는 헛간의 개수]

for (let i = 1; i <= N; i++) {
  if (answer[1] < distance[i]) {
    answer[0] = i;
    answer[1] = distance[i];
    answer[2] = 1;
  } else if (answer[1] === distance[i]) {
    answer[2]++;
  }
}

console.log(answer.join(" "));