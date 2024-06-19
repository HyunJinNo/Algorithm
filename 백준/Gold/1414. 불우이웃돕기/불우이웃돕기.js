const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 컴퓨터의 개수, 1 <= N <= 50
let answer = 0;
const visited = Array(N).fill(false);
const graph = Array.from(Array(N), () =>
  Array(N).fill(Number.MAX_SAFE_INTEGER)
);

for (let i = 1; i <= N; i++) {
  const str = input[i].trim();

  for (let j = 0; j < N; j++) {
    const temp = str[j].charCodeAt(0);

    if (temp >= 97) {
      answer += temp - 96;
      graph[i - 1][j] = Math.min(temp - 96, graph[i - 1][j]);
      graph[j][i - 1] = Math.min(temp - 96, graph[j][i - 1]);
    } else if (temp >= 65) {
      answer += temp - 38;
      graph[i - 1][j] = Math.min(temp - 38, graph[i - 1][j]);
      graph[j][i - 1] = Math.min(temp - 38, graph[j][i - 1]);
    }
  }
}

visited[0] = true;
const distance = graph[0];

for (let i = 0; i < N - 1; i++) {
  let next = -1;
  let minDistance = Number.MAX_SAFE_INTEGER;

  for (let j = 0; j < N; j++) {
    if (!visited[j] && minDistance > distance[j]) {
      next = j;
      minDistance = distance[j];
    }
  }

  if (next === -1) {
    answer = -1;
    break;
  }

  answer -= minDistance;
  visited[next] = true;

  for (let j = 0; j < N; j++) {
    distance[j] = Math.min(distance[j], graph[next][j]);
  }
}

console.log(answer);
