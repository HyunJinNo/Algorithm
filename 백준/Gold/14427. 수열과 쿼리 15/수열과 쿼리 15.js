const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 수열의 크기, 1 <= N <= 100_000
const A = input[1].split(" ").map(Number); // 1 <= A[i] <= 1_000_000_000
const M = Number(input[2]); // 쿼리의 개수, 1 <= M <= 100_000
const tree = Array(N * 4);
let answer = "";

const init = (left, right, node) => {
  if (left === right) {
    tree[node] = [A[left], left];
    return;
  }

  const mid = Math.floor((left + right) / 2);
  init(left, mid, node * 2);
  init(mid + 1, right, node * 2 + 1);

  if (tree[node * 2][0] <= tree[node * 2 + 1][0]) {
    tree[node] = tree[node * 2];
  } else {
    tree[node] = tree[node * 2 + 1];
  }
};

const update = (index, newValue, node, nodeLeft, nodeRight) => {
  if (index < nodeLeft || nodeRight < index) {
    return;
  }

  if (nodeLeft === nodeRight) {
    tree[node][0] = newValue;
    return;
  }

  const mid = Math.floor((nodeLeft + nodeRight) / 2);
  update(index, newValue, node * 2, nodeLeft, mid);
  update(index, newValue, node * 2 + 1, mid + 1, nodeRight);

  if (tree[node * 2][0] <= tree[node * 2 + 1][0]) {
    tree[node] = tree[node * 2];
  } else {
    tree[node] = tree[node * 2 + 1];
  }
};

init(0, N - 1, 1);

for (let i = 3; i < 3 + M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  if (a === 1) {
    update(b - 1, c, 1, 0, N - 1);
  } else {
    answer += `${tree[1][1] + 1}\n`;
  }
}

console.log(answer.trim());