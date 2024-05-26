const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 노드의 개수, 2 <= N <= 100_000
const tree = new Map();
for (let i = 1; i <= N; i++) {
  tree.set(i, []);
}

for (let i = 1; i <= N - 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  tree.get(a).push(b);
  tree.get(b).push(a);
}

const result = Array(N + 1).fill(0);
const visited = Array(N + 1).fill(false);
visited[1] = true;

const solve = (node) => {
  const arr = tree.get(node);
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (!visited[arr[i]]) {
      visited[arr[i]] = true;
      result[arr[i]] = node;
      solve(arr[i]);
    }
  }
};

solve(1);
let answer = "";
for (let i = 2; i <= N; i++) {
  answer += `${result[i]}\n`;
}
console.log(answer);
