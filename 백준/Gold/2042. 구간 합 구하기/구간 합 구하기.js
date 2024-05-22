class SegmentTree {
  constructor(arr) {
    this._size = arr.length;
    this._rangeSum = Array(this._size * 4).fill(0n);
    this.init(arr, 0, this._size - 1, 1);
  }

  init = (arr, left, right, node) => {
    if (left === right) {
      this._rangeSum[node] = arr[left];
      return this._rangeSum[node];
    }

    const mid = Math.floor((left + right) / 2);
    const leftSum = this.init(arr, left, mid, node * 2);
    const rightSum = this.init(arr, mid + 1, right, node * 2 + 1);

    this._rangeSum[node] = leftSum + rightSum;
    return this._rangeSum[node];
  };

  _query = (left, right, node, nodeLeft, nodeRight) => {
    if (right < nodeLeft || nodeRight < left) {
      return BigInt(0);
    }

    if (left <= nodeLeft && nodeRight <= right) {
      return this._rangeSum[node];
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    return (
      this._query(left, right, node * 2, nodeLeft, mid) +
      this._query(left, right, node * 2 + 1, mid + 1, nodeRight)
    );
  };

  query = (left, right) => {
    return this._query(left, right, 1, 0, this._size - 1);
  };

  _update = (index, newValue, node, nodeLeft, nodeRight) => {
    if (index < nodeLeft || nodeRight < index) {
      return this._rangeSum[node];
    }

    if (nodeLeft === nodeRight) {
      this._rangeSum[node] = BigInt(newValue);
      return this._rangeSum[node];
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    this._rangeSum[node] =
      this._update(index, newValue, node * 2, nodeLeft, mid) +
      this._update(index, newValue, node * 2 + 1, mid + 1, nodeRight);
    return this._rangeSum[node];
  };

  update = (index, newValue) => {
    return this._update(index, newValue, 1, 0, this._size - 1);
  };
}

const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let index = 0;

// 수의 개수, 1 <= N <= 1_000_000
// 수의 변경이 일어나는 횟수, 1 <= M <= 10_000
// 구간의 합을 구하는 횟수, 1 <= K <= 10_000
const [N, M, K] = input[index++].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(BigInt(input[index++]));
}

const tree = new SegmentTree(arr);
let answer = "";
for (let i = 0; i < M + K; i++) {
  const temp = input[index++].split(" ");
  const a = Number(temp[0]);
  const b = Number(temp[1]);
  const c = temp[2];

  if (a === 1) {
    tree.update(b - 1, BigInt(c));
  } else {
    answer += `${tree.query(b - 1, Number(c) - 1)}\n`;
  }
}
console.log(answer);
