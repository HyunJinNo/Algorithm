"use strict";
class DataNode {
  constructor(value, prev, next) {
    this._value = value;
    this._prev = prev;
    this._next = next;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  get prev() {
    return this._prev;
  }
  set prev(prev) {
    this._prev = prev;
  }
  get next() {
    return this._next;
  }
  set next(next) {
    this._next = next;
  }
}

/**
 * A linear collection that supports element insertion and removal
 * at both ends. The name deque is short for "double ended queue" and
 * is usually pronounced "deck".
 */
class Deque {
  constructor() {
    this._size = 0;

    /**
     * Retrieves, but does not remove, the first element of this deque.
     * This method differs from peekFirst( ) only in that it throws an exception
     * if this deque is empty.
     *
     * Time Complexity: O(1)
     * @returns the head of this deque
     */
    this.getFirst = () => {
      if (this._size === 0) {
        throw Error("The deque is empty.");
      } else {
        return this._head.value;
      }
    };

    /**
     * Retrieves, but does not remove, the last element of this deque.
     * This method differs from peekLast( ) only in that it throws an exception
     * if this deque is empty.
     *
     * Time Complexity: O(1)
     * @returns the tail of this deque
     */
    this.getLast = () => {
      if (this._size === 0) {
        throw new Error("The deque is empty.");
      } else {
        return this._tail.value;
      }
    };

    /**
     * Retrieves, but does not remove, the first element of this deque,
     * or returns null if this deque is empty.
     *
     * Time Complexity: O(1)
     * @returns the head of this deque, or null if this deque is empty
     */
    this.peekFirst = () => {
      if (this._size === 0) {
        return null;
      } else {
        return this._head.value;
      }
    };

    /**
     * Retrieves, but does not remove, the last element of this deque,
     * or returns null if this deque is empty.
     *
     * Time Complexity: O(1)
     * @returns the tail of this deque, or null if this deque is empty
     */
    this.peekLast = () => {
      if (this._size === 0) {
        return null;
      } else {
        return this._tail.value;
      }
    };

    /**
     * Returns the number of elements in this deque.
     *
     * Time Complexity: O(1)
     * @returns the number of elements in this deque
     */
    this.size = () => {
      return this._size;
    };

    /**
     * Returns true if this deque contains no elements.
     *
     * Time Complexity: O(1)
     * @returns true if this deque contains no elements
     */
    this.isEmpty = () => (this._size === 0 ? true : false);

    /**
     * Inserts the specified element at the front of this deque.
     *
     * Time Complexity: O(1)
     * @param value the element to add
     */
    this.addFirst = (value) => {
      if (this._size === 0) {
        const node = new DataNode(value);
        this._head = node;
        this._tail = node;
      } else {
        const node = new DataNode(value, undefined, this._head);
        this._head.prev = node;
        this._head = node;
      }
      this._size++;
    };

    /**
     * Inserts the specified element at the end of this deque.
     *
     * Time Complexity: O(1)
     * @param value the element to add
     */
    this.addLast = (value) => {
      if (this._size === 0) {
        const node = new DataNode(value);
        this._head = node;
        this._tail = node;
      } else {
        const node = new DataNode(value, this._tail);
        this._tail.next = node;
        this._tail = node;
      }
      this._size++;
    };

    /**
     * Retrieves and removes the first element of this deque.
     * This method throws an exception if this deque is empty.
     *
     * Time Complexity: O(1)
     * @returns the head of this deque
     */
    this.removeFirst = () => {
      if (this._size === 0) {
        throw new Error("The deque is empty.");
      } else {
        const node = this._head;
        this._head = this._head.next;
        this._size--;
        return node.value;
      }
    };

    /**
     * Retrieves and removes the last element of this deque.
     * This methods throws an exception if this deque is empty.
     *
     * Time Complexity: O(1)
     * @returns the tail of this deque
     */
    this.removeLast = () => {
      if (this._size === 0) {
        throw new Error("The deque is empty");
      } else {
        const node = this._tail;
        this._tail = this._tail.prev;
        this._size--;
        return node.value;
      }
    };

    /**
     * Removes all of the elements from this deque.
     * The deque will be empty after this call returns.
     *
     * Time Complexity: O(1)
     */
    this.clear = () => {
      this._head = null;
      this._tail = null;
      this._size = 0;
    };

    this._head = null;
    this._tail = null;
    this._size = 0;
  }
}

const path =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const len = input.length;
const deque = new Deque();
deque.addLast(input[0]);

for (let i = 1; i < len; i++) {
  if (deque.getFirst() >= input[i]) {
    deque.addFirst(input[i]);
  } else {
    deque.addLast(input[i]);
  }
}

let answer = "";
for (let i = 0; i < len; i++) {
  answer += deque.removeFirst();
}
console.log(answer);
