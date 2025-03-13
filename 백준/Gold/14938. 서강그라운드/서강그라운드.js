const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// n: 지역의 개수, 1 <= n <= 100
// m: 수색범위, 1 <= m <= 15
// r: 길의 개수, 1 <= r <= 100
const [n, m, r] = input[0].split(" ").map(Number);
const items = input[1].split(" ").map(Number);
const graph = Array.from({ length: n }, () => Array(n).fill(Infinity));
let answer = 0;

for (let i = 2; i < 2 + r; i++) {
  const [a, b, l] = input[i].split(" ").map(Number);
  graph[a - 1][b - 1] = l;
  graph[b - 1][a - 1] = l;
}

for (let middle = 0; middle < n; middle++) {
  for (let start = 0; start < n; start++) {
    for (let end = 0; end < n; end++) {
      if (start === end) {
        graph[start][end] = 0;
        continue;
      }

      graph[start][end] = Math.min(
        graph[start][end],
        graph[start][middle] + graph[middle][end],
      );
    }
  }
}

for (let i = 0; i < n; i++) {
  answer = Math.max(
    answer,
    graph[i].reduce((total, distance, currentIndex) => {
      if (distance <= m) {
        return total + items[currentIndex];
      } else {
        return total;
      }
    }, 0),
  );
}

console.log(answer);
