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

// N: 마을의 수, 2 <= N <= 2_000
// C: 트럭의 용량, 1 <= C <= 10_000
const [N, C] = input[0].split(" ").map(Number);
const M = Number(input[1]); // 보내는 박스 정보의 개수, 1 <= M <= 10_000
const arr: number[][] = [];

for (let i = 2; i <= M + 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a: number[], b: number[]) => {
  if (a[1] > b[1]) {
    return -1;
  } else if (a[1] < b[1]) {
    return 1;
  } else {
    return b[0] - a[0];
  }
});

let answer = 0;
const truck = new PriorityQueue<Int16Array>(
  (a: Int16Array, b: Int16Array) => b[0] - a[0]
);
let index = 0;

for (let town = N; town > 0; town--) {
  const pq = new PriorityQueue<Int16Array>(
    (a: Int16Array, b: Int16Array) => b[0] - a[0]
  );

  while (!truck.isEmpty()) {
    const temp = truck.dequeue();
    if (temp[0] === town) {
      answer += temp[2];
    } else {
      pq.enqueue(temp);
    }
  }

  while (index < M && arr[index][1] >= town) {
    if (arr[index][1] === town) {
      pq.enqueue(new Int16Array(arr[index]));
    }
    index++;
  }

  let capacity = 0;
  while (capacity < C && !pq.isEmpty()) {
    const temp = pq.dequeue();
    if (capacity + temp[2] <= C) {
      truck.enqueue(temp);
      capacity += temp[2];
    } else {
      truck.enqueue(new Int16Array([temp[0], temp[1], C - capacity]));
      capacity = C;
    }
  }
}
console.log(answer);
