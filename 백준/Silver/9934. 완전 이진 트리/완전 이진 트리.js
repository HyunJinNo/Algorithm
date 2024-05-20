const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const K = Number(input[0]); // 트리의 깊이, 1 <= K <= 10
const arr = input[1].split(" ").map(Number);
const tree = [];

for (let i = 0; i < K; i++) {
  tree.push([]);
}

const solve = (depth, startIndex, endIndex) => {
  if (depth === K) {
    tree[depth - 1].push(arr[startIndex]);
    return;
  }

  const root = (startIndex + endIndex) / 2;

  solve(depth + 1, startIndex, root - 1);
  tree[depth - 1].push(arr[root]);
  solve(depth + 1, root + 1, endIndex);
};

solve(1, 0, Math.pow(2, K) - 2);
for (const nodes of tree) {
  console.log(nodes.join(" "));
}
