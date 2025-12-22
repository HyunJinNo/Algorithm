const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// N: 배열의 길이, 1 <= N <= 1_000_000
// M: 수행한 명령의 개수, 1 <= M <= 1_000_000
const [N, M] = input[0].trim().split(" ").map(Number);
const tree = Array(N * 4).fill(0);
let answer = "";

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

for (let i = 1; i <= M; i++) {
  const arr = input[i].trim().split(" ").map(Number);

  if (arr[0] === 0) {
    const minIndex = Math.min(arr[1] - 1, arr[2] - 1);
    const maxIndex = Math.max(arr[1] - 1, arr[2] - 1);
    answer += `${query(minIndex, maxIndex, 1, 0, N - 1)}\n`;
  } else {
    update(arr[1] - 1, arr[2], 1, 0, N - 1);
  }
}

console.log(answer.trim());