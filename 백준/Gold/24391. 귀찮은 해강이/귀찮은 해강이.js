const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 강의의 개수 1 <= N <= 100_000
// M: 연결되어 있는 건물의 쌍의 개수, 0 <= M <= 100_000
const [N, M] = input[0].split(" ").map(Number);
const parent = Array.from({ length: N + 1 }, (_, index) => index);
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

for (let index = 1; index <= M; index++) {
  const [i, j] = input[index].split(" ").map(Number);
  union(i, j);
}

const arr = input[M + 1].split(" ").map(Number);
let answer = 0;

for (let i = 1; i < arr.length; i++) {
  if (find(arr[i - 1]) !== find(arr[i])) {
    answer++;
  }
}

console.log(answer);