const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 사람의 수, 1 <= N <= 50
// M: 파티의 수, 1 <= M <= 50
const [N, M] = input[0].split(" ").map(Number);
let answer = 0;
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

const arr = input[1].split(" ").map(Number);

for (let i = 1; i <= arr[0]; i++) {
  union(0, arr[i]);
}

for (let i = 2; i < 2 + M; i++) {
  const temp = input[i].split(" ").map(Number);

  for (let j = 2; j <= temp[0]; j++) {
    union(temp[1], temp[j]);
  }
}

for (let i = 2; i < 2 + M; i++) {
  const temp = input[i].split(" ").map(Number);

  if (find(0) !== find(temp[1])) {
    answer++;
  }
}

console.log(answer);