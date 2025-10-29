const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 수의 개수, 1 <= N <= 1_000_000
// M: 수의 변경이 일어나는 횟수, 1 <= M <= 10_000
// K: 구간 곱을 구하는 횟수, 1 <= K <= 10_000
const [N, M, K] = input[0].split(" ").map(Number);
const MOD = 1_000_000_007n;
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

const tree = Array(arr.length * 4);

const init = (left, right, node) => {
  if (left === right) {
    tree[node] = BigInt(arr[left]);
    return;
  }

  const mid = Math.floor((left + right) / 2);
  init(left, mid, node * 2);
  init(mid + 1, right, node * 2 + 1);
  tree[node] = (tree[node * 2] * tree[node * 2 + 1]) % MOD;
};

const query = (left, right, node, nodeLeft, nodeRight) => {
  if (right < nodeLeft || nodeRight < left) {
    return 1n;
  }

  if (left <= nodeLeft && nodeRight <= right) {
    return tree[node];
  }

  const mid = Math.floor((nodeLeft + nodeRight) / 2);
  const leftResult = query(left, right, node * 2, nodeLeft, mid);
  const rightResult = query(left, right, node * 2 + 1, mid + 1, nodeRight);
  return (leftResult * rightResult) % MOD;
};

const update = (index, newValue, node, nodeLeft, nodeRight) => {
  if (index < nodeLeft || nodeRight < index) {
    return;
  }

  // 트리의 리프까지 내려온 경우
  if (nodeLeft === nodeRight) {
    tree[node] = BigInt(newValue);
    return;
  }

  const mid = Math.floor((nodeLeft + nodeRight) / 2);
  update(index, newValue, node * 2, nodeLeft, mid);
  update(index, newValue, node * 2 + 1, mid + 1, nodeRight);
  tree[node] = (tree[node * 2] * tree[node * 2 + 1]) % MOD;
};

init(0, arr.length - 1, 1);

let answer = "";

for (let i = N + 1; i < N + M + K + 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  if (a === 1) {
    update(b - 1, c, 1, 0, arr.length - 1);
  } else {
    answer += `${query(b - 1, c - 1, 1, 0, arr.length - 1)}\n`;
  }
}

console.log(answer.trim());