const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

// n: 집합의 수, 1 <= n <= 1_000_000
// m: 연산의 개수, 1 <= m <= 100_000
const [n, m] = input[0].split(" ").map(Number);
const parent = Array.from({ length: n + 1 }, (value, index) => index);
const rank = Array(n + 1).fill(0);
let answer = "";

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

for (let i = 1; i <= m; i++) {
  const [num, a, b] = input[i].split(" ").map(Number);

  if (num === 0) {
    union(a, b);
  } else {
    // num === 1
    if (find(a) === find(b)) {
      answer += "YES\n";
    } else {
      answer += "NO\n";
    }
  }
}

console.log(answer.trimEnd());