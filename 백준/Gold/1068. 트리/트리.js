const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 트리의 노드의 개수, 1 <= N <= 50
const parent = input[1].trim().split(" ").map(Number);
const tree = new Map();
const visited = Array(N).fill(false);
visited[Number(input[2])] = true;
let root = -1;
let answer = 0;

const makeTree = () => {
  for (let i = 0; i < N; i++) {
    tree.set(i, []);
  }

  for (let i = 0; i < N; i++) {
    if (parent[i] === -1) {
      root = i;
    } else {
      tree.get(parent[i]).push(i);
      tree.get(i).push(parent[i]);
    }
  }
};

const search = (currentNode) => {
  if (visited[currentNode]) {
    return;
  }

  visited[currentNode] = true;
  let flag = true;
  const next = tree.get(currentNode);

  for (let nextNode of next) {
    if (!visited[nextNode]) {
      flag = false;
      search(nextNode);
    }
  }

  if (flag) {
    answer++;
  }
};

makeTree();
search(root);
console.log(answer);
