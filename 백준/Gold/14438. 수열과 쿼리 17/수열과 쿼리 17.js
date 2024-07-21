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

  #query = (left, right, node, nodeLeft, nodeRight) => {
    if (right < nodeLeft || nodeRight < left) {
      return Number.MAX_SAFE_INTEGER;
    }

    if (left <= nodeLeft && nodeRight <= right) {
      return this._rangeMin[node];
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    return Math.min(
      this.#query(left, right, node * 2, nodeLeft, mid),
      this.#query(left, right, node * 2 + 1, mid + 1, nodeRight)
    );
  };

  query = (left, right) => {
    return this.#query(left, right, 1, 0, this._size - 1);
  };

  #update = (index, newValue, node, nodeLeft, nodeRight) => {
    if (index < nodeLeft || nodeRight < index) {
      return this._rangeMin[node];
    }

    if (nodeLeft === nodeRight) {
      this._rangeMin[node] = newValue;
      return this._rangeMin[node];
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    this._rangeMin[node] = Math.min(
      this.#update(index, newValue, node * 2, nodeLeft, mid),
      this.#update(index, newValue, node * 2 + 1, mid + 1, nodeRight)
    );
    return this._rangeMin[node];
  };

  update = (index, newValue) => {
    return this.#update(index, newValue, 1, 0, this._size - 1);
  };
}

const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

let index = 0;
const N = Number(input[index++]); // 수열의 길이, 1 <= N <= 100_000
const A = new Int32Array(input[index++].trim().split(" ").map(Number));
const M = Number(input[index++]); // 쿼리의 개수, 1 <= M <= 100_000
const segmentTree = new SegmentTree(A);

for (let iter = 0; iter < M; iter++) {
  const [command, i, j] = input[index++].trim().split(" ").map(Number);
  if (command === 1) {
    segmentTree.update(i - 1, j);
  } else {
    console.log(segmentTree.query(i - 1, j - 1));
  }
}
