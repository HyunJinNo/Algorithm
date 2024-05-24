class SegmentTree {
  constructor(arr) {
    this._size = arr.length;
    this._rangeMin = Array(this._size * 4);
    this.init(arr, 0, this._size - 1, 1);
  }

  init = (arr, left, right, node) => {
    if (left === right) {
      this._rangeMin[node] = arr[left];
      return this._rangeMin[node];
    }

    const mid = Math.floor((left + right) / 2);
    const leftMin = this.init(arr, left, mid, node * 2);
    const rightMin = this.init(arr, mid + 1, right, node * 2 + 1);

    this._rangeMin[node] = Math.min(leftMin, rightMin);
    return this._rangeMin[node];
  };

  _query = (left, right, node, nodeLeft, nodeRight) => {
    if (right < nodeLeft || nodeRight < left) {
      return Number.MAX_SAFE_INTEGER;
    }

    if (left <= nodeLeft && nodeRight <= right) {
      return this._rangeMin[node];
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    return Math.min(
      this._query(left, right, node * 2, nodeLeft, mid),
      this._query(left, right, node * 2 + 1, mid + 1, nodeRight)
    );
  };

  query = (left, right) => {
    return this._query(left, right, 1, 0, this._size - 1);
  };

  _update = (index, newValue, node, nodeLeft, nodeRight) => {
    if (index < nodeLeft || nodeRight < index) {
      return 0;
    }

    if (nodeLeft === nodeRight) {
      this._rangeMin[node] = newValue;
      return this._rangeMin[node];
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    this._rangeMin[node] = Math.min(
      this._update(index, newValue, node * 2, nodeLeft, mid),
      this._update(index, newValue, node * 2 + 1, mid + 1, nodeRight)
    );
    return this._rangeMin[node];
  };

  update = (index, newValue) => {
    return this._update(index, newValue, 1, 0, this._size - 1);
  };
}

const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: the number of cows, 1 <= N <= 50_000
// Q: Two integers of A and B (1 <= A <= B <= N), 1 <= Q <= 200_000`
const [N, Q] = input[0].split(" ").map(Number);
const arr1 = [];
for (let i = 1; i <= N; i++) {
  arr1.push(Number(input[i]));
}
const arr2 = arr1.map((value) => -value);

const minTree = new SegmentTree(arr1);
const maxTree = new SegmentTree(arr2);
let answer = "";

for (let i = N + 1; i <= N + Q; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer += `${-maxTree.query(a - 1, b - 1) - minTree.query(a - 1, b - 1)}\n`;
}
console.log(answer);
