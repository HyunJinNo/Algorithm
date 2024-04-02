import { ListNode, LinkedList } from "./linkedlist";

const path: string = (process.platform === "linux") ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs").readFileSync(path).toString().split("\n");
const c = Number(input[0]); // 테스트 케이스의 개수, 1 <= c <= 50

for (let i = 1; i <= c; i++) {
  // n: 병사의 수, 3 <= n <= 1,000
  // k: k번째, 1 <= k <= 1,000
  const [n, k] = input[i].trim().split(" ").map(Number);
  const list = new LinkedList<number>(new ListNode<number>(1));
  for (let x = 2; x <= n; x++) {
    list.addLast(new ListNode<number>(x));
  }

  for (let iter = 0; iter < n - 2; iter++) {
    list.removeFirst();
    for (let j = 0; j < k - 1; j++) {
      list.addLast(list.removeFirst());
    }
  }

  const a = list.removeFirst().data;
  const b = list.removeFirst().data;

  console.log(`${Math.min(a, b)} ${Math.max(a, b)}`);
}
