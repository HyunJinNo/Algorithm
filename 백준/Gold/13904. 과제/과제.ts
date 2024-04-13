interface AbstractQueue<T> {
  peek(): T | null;
  size(): number;
  isEmpty(): boolean;
  enqueue(value: T): void;
  dequeue(): T;
  clear(): void;
}

/**
 * An unbounded priority queue based on a priority heap.
 */
export default class PriorityQueue<T> implements AbstractQueue<T> {
  private _compareFn: (a: T, b: T) => number;
  private heap: T[];
  private _size: number;

  constructor(compareFn: (a: T, b: T) => number) {
    this._compareFn = compareFn;
    this.heap = [];
    this._size = 0;
  }

  /**
   * Retrieves, but does not remove, the head of this priority queue
   * or returns null if this priority queue is empty.
   *
   * Time Complexity: O(1)
   * @returns the head of this priority queue, or null if this priority queue is empty
   */
  public peek = (): T | null => {
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
  public enqueue = (value: T) => {
    this._size++;
    this.heap = [...this.heap, value];
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
  public dequeue = (): T => {
    if (this._size === 0) {
      throw new Error("The deque is empty");
    } else {
      this._size--;
      const element = this.heap[0];
      const end = this.heap.pop()!;

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

  /**
   * Removes all of the elements from this priority queue.
   * The priority queue will be empty after this call returns.
   *
   * Time Complexity: O(1)
   */
  public clear = () => {
    this.heap = [];
    this._size = 0;
  };
}

const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const n = Number(input[0]); // 1 <= n <= 1_000
const pq1 = new PriorityQueue<number[]>((a: number[], b: number[]) => {
  if (a[0] - b[0] > 0) {
    return -1;
  } else if (a[0] - b[0] < 0) {
    return 1;
  } else if (a[1] - b[1] > 0) {
    return -1;
  } else {
    return 1;
  }
});

for (let i = 1; i <= n; i++) {
  // 과제 마감일까지 남은 일수, 1 <= d <= 1_000
  // 과제의 점수, 1 <= w <= 100
  pq1.enqueue(input[i].split(" ").map(Number)); // [d, w]
}

const pq2 = new PriorityQueue<number>((a: number, b: number) => b - a);
let day = pq1.peek()![0];
let answer = 0;

while (day > 0) {
  while (!pq1.isEmpty() && pq1.peek()![0] >= day) {
    pq2.enqueue(pq1.dequeue()[1]);
  }

  if (!pq2.isEmpty()) {
    answer += pq2.dequeue();
  }

  day--;
}
console.log(answer);
