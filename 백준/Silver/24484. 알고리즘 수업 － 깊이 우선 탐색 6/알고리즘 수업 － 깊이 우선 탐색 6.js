const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 정점의 수, 5 <= N <= 100_000
// M: 간선의 수, 1 <= M <= 200_000
// R: 시작 정점, 1 <= R <= N
const [N, M, R] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => b - a);
}

let answer = 0;
let count = 1;
const arr = Array(N + 1).fill(-1);
arr[R] = 0;

const solution = (u, depth) => {
  answer += depth * count++;

  for (let v of graph[u]) {
    if (arr[v] === -1) {
      arr[v] = depth + 1;
      solution(v, depth + 1);
    }
  }
};

solution(R, 0);
console.log(answer);