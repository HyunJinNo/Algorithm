const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 섬의 개수, 2 <= N <= 300_000
const parent = Array.from({ length: N + 1 }, (_value, index) => index);
const rank = Array(N + 1).fill(0);

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

  if (rank[rootX] < rank[rootY]) {
    parent[rootX] = rootY;
  } else if (rank[rootX] > rank[rootY]) {
    parent[rootY] = rootX;
  } else {
    parent[rootY] = rootX;
    rank[rootX]++;
  }
};

for (let i = 1; i < N - 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  union(Math.min(x, y), Math.max(x, y));
}

const rootX = find(parent[1]);

for (let i = 1; i <= N; i++) {
  const rootY = find(parent[i]);

  if (rootX !== rootY) {
    console.log(`${rootX} ${rootY}`);
    break;
  }
}