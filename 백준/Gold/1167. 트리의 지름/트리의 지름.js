const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const V = Number(input[0]); // 트리의 정점의 개수, 2 <= V <= 100_000
const graph = Array.from({ length: V }, () => []);

for (let i = 1; i <= V; i++) {
  const arr = input[i].split(" ").map(Number);
  const start = arr[0] - 1;
  let index = 1;

  while (arr[index] !== -1) {
    const end = arr[index++] - 1;
    const distance = arr[index++];
    graph[start].push([end, distance]);
  }
}

const traverse = (node, distance) => {
  distanceArr[node] = distance;

  graph[node].forEach((arr) => {
    if (distanceArr[arr[0]] === 1_000_000_001) {
      traverse(arr[0], distance + arr[1]);
    }
  });
};

let distanceArr = new Int32Array(V).fill(1_000_000_001);
traverse(0, 0);

let maxDistance = 0;
let node = 0;

for (let i = 0; i < V; i++) {
  if (distanceArr[i] > maxDistance) {
    node = i;
    maxDistance = distanceArr[i];
  }
}

distanceArr = new Int32Array(V).fill(1_000_000_001);
traverse(node, 0);

console.log(Math.max(...distanceArr));
