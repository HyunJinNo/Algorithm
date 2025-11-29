const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// n: 점의 개수, 3 <= n <= 500_000
// m: 진행된 차례의 수, 3 <= m <= 1_000_000
const [n, m] = input[0].split(" ").map(Number);
let answer = 0;
const parent = Array.from({ length: n }, (_value, index) => index);
const rank = Array(n).fill(0);

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

for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  if (!union(x, y)) {
    answer = i;
    break;
  }
}

console.log(answer);