class SegmentTree {
  /**
   * @type {number}
   */
  #size; // 배열의 길이

  /**
   * @type {number[]}
   */
  #rangeSum; // 각 구간의 합

  /**
   *
   * @param {number} size
   */
  constructor(size) {
    this.#size = size;
    this.#rangeSum = Array(this.#size * 4).fill(0);
  }

  /**
   * @param {number} left
   * @param {number} right
   * @param {number} node
   * @param {number} nodeLeft
   * @param {number} nodeRight
   * @returns {number}
   */
  #query = (left, right, node, nodeLeft, nodeRight) => {
    if (right < nodeLeft || nodeRight < left) {
      return 0;
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
   * @returns {number}
   */
  query = (left, right) => {
    return this.#query(left, right, 1, 0, this.#size - 1);
  };

  /**
   * @param {number} index
   * @param {number} newValue
   * @param {number} node
   * @param {number} nodeLeft
   * @param {number} nodeRight
   * @returns {number}
   */
  #update = (index, newValue, node, nodeLeft, nodeRight) => {
    // index가 노드가 표현하는 구간과 상관없는 경우엔 무시한다.
    if (index < nodeLeft || nodeRight < index) {
      return this.#rangeSum[node];
    }

    // 트리의 leaf까지 내려온 경우
    if (nodeLeft === nodeRight) {
      this.#rangeSum[node] += newValue;
      return this.#rangeSum[node];
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    const leftSum = this.#update(index, newValue, node * 2, nodeLeft, mid);
    const rightSum = this.#update(
      index,
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
   * @param {number} index
   * @param {number} newValue
   * @returns {number}
   */
  update = (index, newValue) => {
    return this.#update(index, newValue, 1, 0, this.#size - 1);
  };
}

const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 월곡이가 살아온 날, 1 <= N <= 1_000_000
// Q: 쿼리의 개수, 1 <= Q <= 100_000
const [N, Q] = input[0].split(" ").map(Number);
const segmentTree = new SegmentTree(N);

for (let i = 1; i <= Q; i++) {
  const [num, p, q] = input[i].split(" ").map(Number);

  if (num === 1) {
    segmentTree.update(p - 1, q);
  } else {
    console.log(segmentTree.query(p - 1, q - 1));
  }
}
