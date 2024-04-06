import DataNode from "./DataNode";

/**
 * A linear collection that supports element insertion and removal
 * at both ends. The name deque is short for "double ended queue" and
 * is usually pronounced "deck"
 */
export default class Deque<T> {
  private _head?: DataNode<T>;
  private _tail?: DataNode<T>;
  private _size: number = 0;

  constructor(node?: DataNode<T>) {
    this._head = node;
    this._tail = node;
    if (node !== undefined) {
      this._size = 1;
    }
  }

  /**
   * Retrieves, but does not remove, the first element of this deque.
   * This method differs from peekFirst( ) only in that it throws an exception
   * if this deque is empty.
   * @returns the head of this deque
   */
  public getFirst = (): T => {
    if (this._size === 0) {
      throw Error("The deque is empty.");
    } else {
      return this._head!.value;
    }
  };

  /**
   * Retrieves, but does not remove, the last element of this deque.
   * This method differs from peekLast( ) only in that it throws an exception
   * if this deque is empty.
   * @returns the tail of this deque
   */
  public getLast = (): T => {
    if (this._size === 0) {
      throw new Error("The deque is empty.");
    } else {
      return this._tail!.value;
    }
  };

  /**
   * Retrieves, but does not remove, the first element of this deque,
   * or returns null if this deque is empty.
   * @returns the head of this deque, or null if this deque is empty
   */
  public peekFirst = (): T | null => {
    if (this._size === 0) {
      return null;
    } else {
      return this._head!.value;
    }
  };

  /**
   * Retrieves, but does not remove, the last element of this deque,
   * or returns null if this deque is empty.
   * @returns the tail of this deque, or null if this deque is empty
   */
  public peekLast = (): T | null => {
    if (this._size === 0) {
      return null;
    } else {
      return this._tail!.value;
    }
  };

  /**
   * Returns the number of elements in this deque.
   * @returns the number of elements in this deque
   */
  public size = (): number => {
    return this._size;
  };

  /**
   * Returns true if this deque contains no elements.
   * @returns true if this deque contains no elements
   */
  public isEmpty = (): boolean => (this._size === 0 ? true : false);

  /**
   * Inserts the specified element at the front of this deque.
   * @param value the element to add
   */
  public addFirst = (value: T) => {
    if (this._size === 0) {
      const node = new DataNode(value);
      this._head = node;
      this._tail = node;
    } else {
      const node = new DataNode(value, undefined, this._head);
      this._head!.prev = node;
      this._head = node;
    }
    this._size++;
  };

  /**
   * Inserts the specified element at the end of this deque.
   * @param value the element to add
   */
  public addLast = (value: T) => {
    if (this._size === 0) {
      const node = new DataNode(value);
      this._head = node;
      this._tail = node;
    } else {
      const node = new DataNode(value, this._tail);
      this._tail!.next = node;
      this._tail = node;
    }
    this._size++;
  };

  /**
   * Retrieves and removes the first element of this deque.
   * This method throws an exception if this deque is empty.
   * @returns the head of this deque
   */
  public removeFirst = (): T => {
    if (this._size === 0) {
      throw new Error("The deque is empty.");
    } else {
      const node = this._head!;
      this._head = this._head!.next;
      this._size--;
      return node.value;
    }
  };

  /**
   * Retrieves and removes the last element of this deque.
   * This methods throws an exception if this deque is empty.
   * @returns
   */
  public removeLast = (): T => {
    if (this._size === 0) {
      throw new Error("The deque is empty");
    } else {
      const node = this._tail!;
      this._tail = this._tail!.prev;
      this._size--;
      return node.value;
    }
  };
}
