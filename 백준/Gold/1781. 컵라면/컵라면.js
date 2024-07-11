/**
 * An unbounded priority queue based on a priority heap.
 */
class PriorityQueue {
  /**
   * @param {(a: T, b: T) => number} compareFn
   */
  constructor(compareFn) {
    this._compareFn = compareFn;
    this.heap = new Int32Array(200000);
    this._size = 0;
  }

  /**
   * Retrieves, but does not remove, the head of this priority queue
   * or returns null if this priority queue is empty.
   *
   * Time Complexity: O(1)
   * @returns {T} the head of this priority queue, or null if this priority queue is empty
   */
  peek = () => {
    if (this._size === 0) {
      return null;
    } else {
      return this.heap[0];
    }
  };

  /**
   * Returns the number of elements in this priority queue.
   *
   * Time Complexity: O(1)
   * @returns {number} the number of elements in this priority queue.
   */
  size = () => this._size;

  /**
   * Returns true if this priority queue contains no elements.
   *
   * Time Complexity: O(1)
   * @returns {boolean} true if this priority queue contains no elements
   */
  isEmpty = () => (this._size === 0 ? true : false);

  /**
   * Inserts the specified element into this priority queue.
   *
   * Time Complexity: O(log N)
   * @param {T} value the element to add
   */
  enqueue = (value) => {
    this.heap[this._size] = value;
    this._size++;
    this.bubbleUp();
  };

  bubbleUp = () => {
    let index = this._size - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (this._compareFn(parent, element) > 0) {
        this.heap[parentIndex] = element;
        this.heap[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
  };

  /**
   * Retrieves and removes the head of this priority queue.
   * This methods throws an exception if this priority queue is empty.
   *
   * Time Complexity: O(log N)
   * @returns {T} the head of this priority queue
   */
  dequeue = () => {
    if (this._size === 0) {
      throw new Error("The deque is empty");
    } else {
      this._size--;
      const element = this.heap[0];
      const end = this.heap[this._size];

      if (this._size > 0) {
        this.heap[0] = end;
        this.sinkDown();
      }

      return element;
    }
  };

  sinkDown = () => {
    let index = 0;
    const element = this.heap[index];

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let leftChild = null;
      let rightChild = null;
      let swap = null;

      if (left < this._size) {
        leftChild = this.heap[left];
        if (this._compareFn(element, leftChild) > 0) {
          swap = left;
        }
      } else {
        break;
      }

      if (right < this._size) {
        rightChild = this.heap[right];
        if (swap === null) {
          if (this._compareFn(element, rightChild) > 0) {
            swap = right;
          }
        } else if (swap !== null) {
          if (this._compareFn(leftChild, rightChild) > 0) {
            swap = right;
          }
        }
      }

      if (swap === null) {
        break;
      } else {
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  };

  /**
   * Removes all of the elements from this priority queue.
   * The priority queue will be empty after this call returns.
   *
   * Time Complexity: O(1)
   */
  clear = () => {
    this.heap = [];
    this._size = 0;
  };
}

const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 숙제의 개수, 1 <= N <= 200_000
const homeworks = [];
const pq = new PriorityQueue((a, b) => {
  return b - a;
});

for (let i = 1; i <= N; i++) {
  homeworks.push(new Int32Array(input[i].trim().split(" ").map(Number)));
}

homeworks.sort((a, b) => {
  if (a[0] > b[0]) {
    return -1;
  } else if (a[0] < b[0]) {
    return 1;
  } else {
    return b[1] - a[1];
  }
});

let index = 0;
let answer = 0;
for (let day = homeworks[0][0]; day >= 0; day--) {
  while (index < N && day < homeworks[index][0]) {
    pq.enqueue(homeworks[index++][1]);
  }

  if (!pq.isEmpty()) {
    answer += pq.dequeue();
  }
}

console.log(answer);
