const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const n = Number(input[0]); // 학생의 수, 2 <= n <= 1_000
const m = Number(input[1]); // 인간관계의 수, 1 <= m <= 5_000

const parent = Array.from({ length: n + 1 }, (_value, index) => index);
const rank = Array(n + 1).fill(0);
const enemy = Array.from({ length: n + 1 }, () => []);

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

for (let i = 2; i < 2 + m; i++) {
  const temp = input[i].split(" ");
  const relation = temp[0]; // F 또는 E
  const p = Number(temp[1]);
  const q = Number(temp[2]);

  if (relation === "F") {
    union(p, q);
  } else {
    enemy[p].push(q);
    enemy[q].push(p);
  }
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j < enemy[i].length; j++) {
    union(enemy[i][0], enemy[i][j]);
  }
}

console.log(new Set(parent).size - 1);