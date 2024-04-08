const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const n = Number(input[0]); // 행성의 수, 1 <= n <= 1_000
const graph: Int32Array[] = [];

for (let i = 1; i <= n; i++) {
  graph.push(new Int32Array(input[i].trim().split(" ").map(Number)));
}

let answer = 0;
const visited: boolean[] = Array(n).fill(false);
visited[0] = true;
const distance: Int32Array = new Int32Array(n).fill(987654321);
graph[0].forEach((value: number, index: number) => {
  distance[index] = value;
});

for (let iter = 0; iter < n - 1; iter++) {
  let nextIndex = 0;
  let min = 987654321;

  distance.forEach((value, index) => {
    if (!visited[index] && value < min) {
      min = value;
      nextIndex = index;
    }
  });

  visited[nextIndex] = true;
  answer += min;

  graph[nextIndex].forEach((value, index) => {
    distance[index] = Math.min(distance[index], value);
  });
}

console.log(answer);
