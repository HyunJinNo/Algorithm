const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 수의 개수
// Q: 턴의 개수
// 1 <= N, Q <= 100_000
const [N, Q] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const tree = new Array(N * 4);
let answer = "";

const init = (left, right, node) => {
  if (left === right) {
    tree[node] = arr[left];
    return;
  }

  const mid = Math.floor((left + right) / 2);
  init(left, mid, node * 2);
  init(mid + 1, right, node * 2 + 1);
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
};

const query = (left, right, node, nodeLeft, nodeRight) => {
  if (right < nodeLeft || nodeRight < left) {
    return 0;
  }

  if (left <= nodeLeft && nodeRight <= right) {
    return tree[node];
  }

  const mid = Math.floor((nodeLeft + nodeRight) / 2);
  const leftSum = query(left, right, node * 2, nodeLeft, mid);
  const rightSum = query(left, right, node * 2 + 1, mid + 1, nodeRight);
  return leftSum + rightSum;
};

const update = (index, newValue, node, nodeLeft, nodeRight) => {
  if (index < nodeLeft || nodeRight < index) {
    return;
  }

  if (nodeLeft === nodeRight) {
    tree[node] = newValue;
    return;
  }

  const mid = Math.floor((nodeLeft + nodeRight) / 2);
  update(index, newValue, node * 2, nodeLeft, mid);
  update(index, newValue, node * 2 + 1, mid + 1, nodeRight);
  tree[node] = tree[node * 2] + tree[node * 2 + 1];
};

init(0, N - 1, 1);

for (let i = 2; i < 2 + Q; i++) {
  const [x, y, a, b] = input[i].split(" ").map(Number);
  answer += `${query(Math.min(x, y) - 1, Math.max(x, y) - 1, 1, 0, N - 1)}\n`;
  update(a - 1, b, 1, 0, N - 1);
}

console.log(answer.trim());