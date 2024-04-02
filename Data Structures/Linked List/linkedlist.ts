export class ListNode<T> {
  readonly data: T;
  prev: ListNode<T>;
  next: ListNode<T>;

  constructor(data: T) {
    this.data = data;
    this.prev = this;
    this.next = this;
  }
}

export class LinkedList<T> {
  private head: ListNode<T>;

  constructor(head: ListNode<T>) {
    this.head = head;
  }

  getFirst(): ListNode<T> {
    return this.head;
  }

  getLast(): ListNode<T> {
    return this.head.prev;
  }

  addLast(node: ListNode<T>) {
    node.prev = this.head.prev;
    node.next = this.head;
    this.head.prev.next = node;
    this.head.prev = node;
  }

  removeFirst(): ListNode<T> {
    const node = this.head;
    this.head.next.prev = this.head.prev;
    this.head.prev.next = this.head.next;
    this.head = this.head.next;
    return node;
  }
}
