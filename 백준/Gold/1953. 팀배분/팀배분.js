const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const n = Number(input[0]); // 학생들의 수, 1 <= n <= 100
const edges = Array.from({ length: n + 1 }, () => []);
const graph = Array(n + 1).fill(-1);

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  const m = arr[0]; // 싫어하는 사람의 수

  for (let j = 1; j <= m; j++) {
    edges[i].push(arr[j]);
  }
}

const stack = [];

for (let i = 1; i <= n; i++) {
  if (graph[i] === -1) {
    stack.push(i);
    graph[i] = 0;
  }

  while (stack.length > 0) {
    const node = stack.pop();

    for (const nextNode of edges[node]) {
      if (graph[nextNode] === -1) {
        stack.push(nextNode);
        graph[nextNode] = graph[node] === 0 ? 1 : 0;
      }
    }
  }
}

const team1 = [];
const team2 = [];

for (let i = 1; i <= n; i++) {
  if (graph[i] === 0) {
    team1.push(i);
  } else if (graph[i] === 1) {
    team2.push(i);
  }
}

console.log(
  `
${team1.length}
${team1.join(" ")}
${team2.length}
${team2.join(" ")}
`.trim(),
);