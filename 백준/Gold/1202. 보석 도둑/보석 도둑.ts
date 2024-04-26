/**
 * An unbounded priority queue based on a priority heap.
 */
export default class PriorityQueue {
  private _compareFn: (a: number, b: number) => number;
  private heap: Int32Array;
  private _size: number;

  constructor(compareFn: (a: number, b: number) => number) {
    this._compareFn = compareFn;
    this.heap = new Int32Array(300000);
    this._size = 0;
  }

  /**
   * Retrieves, but does not remove, the head of this priority queue
   * or returns null if this priority queue is empty.
   *
   * Time Complexity: O(1)
   * @returns the head of this priority queue, or null if this priority queue is empty
   */
  public peek = (): number | null => {
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
   * @returns the number of elements in this priority queue.
   */
  public size = (): number => this._size;

  /**
   * Returns true if this priority queue contains no elements.
   *
   * Time Complexity: O(1)
   * @returns true if this priority queue contains no elements
   */
  public isEmpty = (): boolean => (this._size === 0 ? true : false);

  /**
   * Inserts the specified element into this priority queue.
   *
   * Time Complexity: O(log N)
   * @param value the element to add
   */
  public enqueue = (value: number) => {
    this.heap[this._size] = value;
    this._size++;
    this.bubbleUp();
  };

  private bubbleUp = () => {
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
   * @returns the head of this priority queue
   */
  public dequeue = (): number => {
    if (this._size === 0) {
      throw new Error("The deque is empty");
    } else {
      this._size--;
      const element = this.heap[0];
      const end = this.heap[this._size]!;

      if (this._size > 0) {
        this.heap[0] = end;
        this.sinkDown();
      }

      return element;
    }
  };

  private sinkDown = () => {
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
}

const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");

// N: 보석의 개수, 1 <= N <= 300_000
// K: 가방의 개수, 1 <= K <= 300_000
const [N, K] = input[0].split(" ").map(Number);
const jewels = Array.from(Array(N), () => new Int32Array(2)); // [무게, 가격]
const bags = new Int32Array(K);
const pq = new PriorityQueue((a, b) => b - a);
let answer = 0;

for (let i = 1; i <= N; i++) {
  jewels[i - 1] = new Int32Array(input[i].split(" ").map(Number));
}
jewels.sort((a, b) => a[0] - b[0]);

for (let i = N + 1; i < N + K + 1; i++) {
  bags[i - N - 1] = Number(input[i]);
}
bags.sort((a: number, b: number) => a - b);

let index = 0;
for (let i = 0; i < K; i++) {
  while (index < N && bags[i] >= jewels[index][0]) {
    pq.enqueue(jewels[index][1]);
    index++;
  }
  if (!pq.isEmpty()) {
    answer += pq.dequeue();
  }
}

console.log(answer);
