const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let num = 1;
let index = 0;
let answer = "";

while (true) {
  // n: 정점의 개수, 1 <= n <= 500
  // m: 간선의 개수, m <= n * (n - 1) / 2
  const [n, m] = input[index++].split(" ").map(Number);

  if (n === 0 && m === 0) {
    break;
  }

  const parent = Array.from({ length: n + 1 }, (_value, index) => index);
  const rank = Array(n + 1).fill(0);
  const noTree = new Set();

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
      noTree.add(rootX);
      return;
    }

    if (rank[rootX] < rank[rootY]) {
      rank[rootX] = rootY;
    } else if (rank[rootX] > rank[rootY]) {
      rank[rootY] = rootX;
    } else {
      parent[rootY] = rootX;
      rank[rootY]++;

      if (noTree.has(rootX) || noTree.has(rootY)) {
        noTree.add(rootX);
        noTree.add(rootY);
      }
    }

    return true;
  };

  for (let iter = 0; iter < m; iter++) {
    const [a, b] = input[index++].split(" ").map(Number);
    union(a, b);
  }

  let count = 0;
  const set = new Set();

  for (let i = 1; i <= n; i++) {
    if (!set.has(find(i)) && !noTree.has(find(i))) {
      set.add(find(i));
      count++;
    }
  }

  if (count === 0) {
    answer += `Case ${num}: No trees.\n`;
  } else if (count === 1) {
    answer += `Case ${num}: There is one tree.\n`;
  } else {
    answer += `Case ${num}: A forest of ${count} trees.\n`;
  }

  num++;
}

console.log(answer.trim());