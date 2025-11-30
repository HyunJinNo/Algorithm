const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 행성의 개수, 1 <= N <= 100_000
const coords = [];
const parent = Array.from({ length: N }, (_, index) => index);
const rank = Array(N).fill(0);

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
    return false;
  }

  if (rank[rootX] < rank[rootY]) {
    parent[rootX] = rootY;
  } else if (rank[rootX] > rank[rootY]) {
    parent[rootY] = rootX;
  } else {
    parent[rootY] = rootX;
    rank[rootX]++;
  }

  return true;
};

for (let i = 1; i <= N; i++) {
  const [x, y, z] = input[i].split(" ").map(Number);
  coords.push([i - 1, x, y, z]); // [index, x, y, z]
}

const edges = [];

const getDistance = () => {
  for (let i = 0; i < N - 1; i++) {
    const distance = Math.min(
      Math.abs(coords[i][1] - coords[i + 1][1]),
      Math.abs(coords[i][2] - coords[i + 1][2]),
      Math.abs(coords[i][3] - coords[i + 1][3]),
    );
    edges.push([distance, coords[i][0], coords[i + 1][0]]);
  }
};

coords.sort((a, b) => a[1] - b[1]);
getDistance();

coords.sort((a, b) => a[2] - b[2]);
getDistance();

coords.sort((a, b) => a[3] - b[3]);
getDistance();

edges.sort((a, b) => a[0] - b[0]);

let count = N - 1;
let answer = 0;

for (let i = 0; i < edges.length; i++) {
  if (union(edges[i][1], edges[i][2])) {
    answer += edges[i][0];
    count--;
  }

  if (count === 0) {
    break;
  }
}

console.log(answer);