const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 도시의 수, 1 <= N <= 200
const M = Number(input[1]); // 여행 계획에 속한 도시들의 수, 1 <= M <= 1_000
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

for (let i = 2; i < 2 + N; i++) {
  const arr = input[i].split(" ").map(Number);

  for (let j = 0; j < N; j++) {
    if (arr[j] === 1) {
      union(i - 1, j + 1);
    }
  }
}

const plan = input[2 + N].split(" ").map(Number);
let answer = true;

for (let i = 1; i < M; i++) {
  if (find(plan[i - 1]) !== find(plan[i])) {
    answer = false;
    break;
  }
}

console.log(answer ? "YES" : "NO");