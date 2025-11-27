const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 코스의 길이
// M: 시야의 범위
// 1 <= M <= N <= 1_000_000
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 1_000_000
const tree = Array(N * 4);
let answer = "";

const init = (left, right, node) => {
  if (left === right) {
    tree[node] = arr[left];
    return;
  }

  const mid = Math.floor((left + right) / 2);
  init(left, mid, node * 2);
  init(mid + 1, right, node * 2 + 1);
  tree[node] = Math.max(tree[node * 2], tree[node * 2 + 1]);
};

const query = (left, right, node, nodeLeft, nodeRight) => {
  if (right < nodeLeft || nodeRight < left) {
    return 0;
  }

  if (left <= nodeLeft && nodeRight <= right) {
    return tree[node];
  }

  const mid = Math.floor((nodeLeft + nodeRight) / 2);
  const leftResult = query(left, right, node * 2, nodeLeft, mid);
  const rightResult = query(left, right, node * 2 + 1, mid + 1, nodeRight);
  return Math.max(leftResult, rightResult);
};

init(0, N - 1, 1);

for (let i = M - 1; i <= N - M; i++) {
  answer += `${query(i - M + 1, i + M - 1, 1, 0, N - 1)} `;
}

console.log(answer.trim());