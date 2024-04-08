interface AbstractQueue {
  peek(): number | null;
  size(): number;
  isEmpty(): boolean;
  enqueue(value: number): void;
  dequeue(): number;
  clear(): void;
}

/**
 * An unbounded priority queue based on a priority heap.
 */
class PriorityQueue implements AbstractQueue {
  private _compareFn: (a: number, b: number) => number;
  private heap: Int32Array;
  private _size: number;

  constructor(compareFn: (a: number, b: number) => number) {
    this._compareFn = compareFn;
    this.heap = new Int32Array(500000);
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
      let leftChild: number | null = null;
      let rightChild: number | null = null;
      let swap: number | null = null;

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
  public clear = () => {
    this.heap = new Int32Array(500000);
    this._size = 0;
  };
}

const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const n = Number(input[0]); // 거점지를 방문한 횟수, 1 <= n <= 5_000
const pq = new PriorityQueue((a: number, b: number) => b - a);
let answer = "";

for (let i = 1; i <= n; i++) {
  // a === 0 or (1 ~ 100)
  const [a, ...arr] = input[i].trim().split(" ").map(Number);

  if (a === 0) {
    if (pq.isEmpty()) {
      answer += "-1\n";
    } else {
      answer += `${pq.dequeue()}\n`;
    }
  } else {
    arr.sort((a: number, b: number) => b - a);
    arr.forEach((value: number) => {
      pq.enqueue(value);
    });
  }
}

console.log(answer);
