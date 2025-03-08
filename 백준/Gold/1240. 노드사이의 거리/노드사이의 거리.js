const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 2 <= N <= 1_000
// 1 <= M <= 1_000
const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));
let index = 1;
let answer = "";

for (let i = 0; i < N - 1; i++) {
  const [a, b, c] = input[index++].split(" ").map(Number);
  graph[a][b] = c;
  graph[b][a] = c;
}

for (let middle = 1; middle <= N; middle++) {
  for (let start = 1; start <= N; start++) {
    for (let end = 1; end <= N; end++) {
      graph[start][end] = Math.min(
        graph[start][end],
        graph[start][middle] + graph[middle][end],
      );
    }
  }
}

for (let i = 0; i < M; i++) {
  const [a, b] = input[index++].split(" ").map(Number);
  answer += `${graph[a][b]}\n`;
}

console.log(answer.trim());
