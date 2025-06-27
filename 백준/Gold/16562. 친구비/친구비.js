const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 학생 수, 1 <= N <= 10_000
// M: 친구관계 수, 0 <= M <= 10_000
// k: 가지고 있는 돈, 1 <= k <= 10_000_000
const [N, M, k] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const parent = Array.from({ length: N + 1 }, (_value, index) => index);

const find = (x) => {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]);
  }
  return parent[x];
};

const union = (x, y) => {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX === rootY) {
    return;
  }

  if (A[rootX - 1] <= A[rootY - 1]) {
    parent[rootY] = rootX;
  } else if (A[rootX - 1] > A[rootY - 1]) {
    parent[rootX] = rootY;
  }
};

for (let i = 2; i < 2 + M; i++) {
  const [v, w] = input[i].split(" ").map(Number);
  union(v, w);
}

const visited = new Set();
let answer = 0;

for (let i = 1; i <= N; i++) {
  const root = find(i);

  if (!visited.has(root)) {
    answer += A[root - 1];
    visited.add(root);
  }
}

console.log(answer > k ? "Oh no" : answer);