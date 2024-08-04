class SegmentTree {
  /**
   * @type {number}
   */
  #size; // 배열의 길이

  /**
   * @type {BigInt[]}
   */
  #rangeSum; // 각 구간의 합

  /**
   * @type {BigInt[]}
   */
  #lazy;

  /**
   *
   * @param {BigInt[]} arr
   */
  constructor(arr) {
    this.#size = arr.length;
    this.#rangeSum = new Array(this.#size * 4).fill(0n);
    this.#lazy = new Array(this.#size * 4).fill(0n);
    this.#init(arr, 0, this.#size - 1, 1);
  }

  /**
   *
   * @param {BigInt[]} arr
   * @param {number} left
   * @param {number} right
   * @param {number} node
   * @returns {BigInt}
   */
  #init = (arr, left, right, node) => {
    if (left === right) {
      this.#rangeSum[node] = arr[left];
      return this.#rangeSum[node];
    }

    const mid = Math.floor((left + right) / 2);
    const leftSum = this.#init(arr, left, mid, node * 2);
    const rightSum = this.#init(arr, mid + 1, right, node * 2 + 1);

    this.#rangeSum[node] = leftSum + rightSum;
    return this.#rangeSum[node];
  };

  /**
   * @param {number} left
   * @param {number} right
   * @param {number} node
   * @param {number} nodeLeft
   * @param {number} nodeRight
   * @returns {BigInt}
   */
  #query = (left, right, node, nodeLeft, nodeRight) => {
    this.#updateLazy(node, nodeLeft, nodeRight);

    if (right < nodeLeft || nodeRight < left) {
      return BigInt(0);
    }

    // node가 표현하는 범위가 arr[left..right]에 완전히 포함되는 경우
    if (left <= nodeLeft && nodeRight <= right) {
      return this.#rangeSum[node];
    }

    // 양쪽 구간을 나눠서 푼 뒤 결과를 합친다.
    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    return (
      this.#query(left, right, node * 2, nodeLeft, mid) +
      this.#query(left, right, node * 2 + 1, mid + 1, nodeRight)
    );
  };

  /**
   * query()을 외부에서 호출하기 위한 인터페이스
   *
   * @param {number} left
   * @param {number} right
   * @returns {BigInt}
   */
  query = (left, right) => {
    return this.#query(left, right, 1, 0, this.#size - 1);
  };

  /**
   *
   * @param {number} node
   * @param {number} nodeLeft
   * @param {number} nodeRight
   */
  #updateLazy = (node, nodeLeft, nodeRight) => {
    if (this.#lazy[node] !== 0) {
      this.#rangeSum[node] +=
        BigInt(nodeRight - nodeLeft + 1) * this.#lazy[node];
      if (nodeLeft !== nodeRight) {
        this.#lazy[node * 2] += this.#lazy[node];
        this.#lazy[node * 2 + 1] += this.#lazy[node];
      }
      this.#lazy[node] = BigInt(0);
    }
  };

  /**
   * @param {number} leftIndex
   * @param {number} rightIndex
   * @param {BigInt} newValue
   * @param {number} node
   * @param {number} nodeLeft
   * @param {number} nodeRight
   * @returns {BigInt}
   */
  #update = (leftIndex, rightIndex, newValue, node, nodeLeft, nodeRight) => {
    this.#updateLazy(node, nodeLeft, nodeRight);

    // index가 노드가 표현하는 구간과 상관없는 경우엔 무시한다.
    if (rightIndex < nodeLeft || nodeRight < leftIndex) {
      return this.#rangeSum[node];
    }

    if (leftIndex <= nodeLeft && nodeRight <= rightIndex) {
      this.#rangeSum[node] += BigInt(nodeRight - nodeLeft + 1) * newValue;
      if (nodeLeft !== nodeRight) {
        this.#lazy[node * 2] += newValue;
        this.#lazy[node * 2 + 1] += newValue;
      }

      return this.#rangeSum[node];
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    const leftSum = this.#update(
      leftIndex,
      rightIndex,
      newValue,
      node * 2,
      nodeLeft,
      mid
    );
    const rightSum = this.#update(
      leftIndex,
      rightIndex,
      newValue,
      node * 2 + 1,
      mid + 1,
      nodeRight
    );
    this.#rangeSum[node] = leftSum + rightSum;
    return this.#rangeSum[node];
  };

  /**
   * update()을 외부에서 호출하기 위한 인터페이스
   *
   * @param {number} leftIndex
   * @param {number} rightIndex
   * @param {BigInt} newValue
   * @returns {BigInt}
   */
  update = (leftIndex, rightIndex, newValue) => {
    return this.#update(leftIndex, rightIndex, newValue, 1, 0, this.#size - 1);
  };
}

const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 수의 개수, 1 <= N <= 1_000_000
// M: 수의 변경이 일어나는 횟수, 1 <= M <= 10_000
// K: 구간의 합을 구하는 횟수, 1 <= K <= 10_000
const [N, M, K] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(BigInt(input[i]));
}

const segmentTree = new SegmentTree(arr);
let answer = "";

for (let i = N + 1; i <= N + M + K; i++) {
  const [a, b, c, d] = input[i].trim().split(" ");

  if (a === "1") {
    segmentTree.update(b - 1, c - 1, BigInt(d));
  } else {
    answer += `${segmentTree.query(b - 1, c - 1)}\n`;
  }
}
console.log(answer);
