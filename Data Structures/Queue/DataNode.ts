export default class DataNode<T> {
  private _value: T;
  private _prev?: DataNode<T>;
  private _next?: DataNode<T>;

  constructor(value: T, prev?: DataNode<T>, next?: DataNode<T>) {
    this._value = value;
    this._prev = prev;
    this._next = next;
  }

  public get value(): T {
    return this._value;
  }

  public set value(value: T) {
    this._value = value;
  }

  public get prev(): DataNode<T> {
    return this._prev!;
  }

  public set prev(prev: DataNode<T>) {
    this._prev = prev;
  }

  public get next(): DataNode<T> {
    return this._next!;
  }

  public set next(next: DataNode<T>) {
    this._next = next;
  }
}
