const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 건물의 종류 수, 1 <= N <= 500
const answer = Array(N + 1).fill(0);
const cost = Array(N + 1).fill(0);
const inDegree = Array(N + 1).fill(0);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= N; i++) {
  const arr = input[i].split(" ").map(Number);
  cost[i] = arr[0];

  let index = 1;
  while (arr[index] !== -1) {
    graph[arr[index++]].push(i);
    inDegree[i]++;
  }
}

const list = [];
let size = 0;
let index = 0;

for (let i = 1; i <= N; i++) {
  if (inDegree[i] === 0) {
    answer[i] = cost[i];
    list.push([i, cost[i]]);
    size++;
  }
}

while (index < size) {
  const [src, time] = list[index++];
  graph[src].forEach((dest) => {
    inDegree[dest]--;
    answer[dest] = Math.max(answer[dest], time + cost[dest]);

    if (inDegree[dest] === 0) {
      list.push([dest, answer[dest]]);
      size++;
    }
  });
}

let result = "";
for (let i = 1; i <= N; i++) {
  result += `${answer[i]}\n`;
}
console.log(result.trim());
