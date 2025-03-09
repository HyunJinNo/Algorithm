const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 도시의 개수, 1 <= N <= 20
const graph = input.slice(1).map((str) => str.split(" ").map(Number));
let flag = true;

loop: for (let middle = 0; middle < N; middle++) {
  for (let start = 0; start < N; start++) {
    for (let end = 0; end < N; end++) {
      if (graph[start][end] > graph[start][middle] + graph[middle][end]) {
        flag = false;
        break loop;
      }
    }
  }
}

if (!flag) {
  console.log(-1);
  process.exit(0);
}

let answer = 0;
const used = Array.from({ length: N }, () => Array(N).fill(true));

for (let middle = 0; middle < N; middle++) {
  for (let start = 0; start < N; start++) {
    for (let end = start + 1; end < N; end++) {
      if (start !== end && middle !== start && middle !== end) {
        if (graph[start][end] === graph[start][middle] + graph[middle][end]) {
          used[start][end] = false;
        }
      }
    }
  }
}

for (let start = 0; start < N; start++) {
  for (let end = start + 1; end < N; end++) {
    if (used[start][end]) {
      answer += graph[start][end];
    }
  }
}

console.log(answer);
