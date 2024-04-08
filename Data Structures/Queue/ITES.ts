import Deque from "./Deque";

const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const c = Number(input[0]); // 테스트 케이스의 수, 1 <= c <= 20

/**
 * 합이 k인 구간의 수를 계산하는 함수
 * @param k 부분 수열의 합
 * @param n 신호 기록의 길이
 * @returns 합이 k인 구간의 수
 */
const solve = (k: number, n: number): number => {
  let result = 0;
  let sum = 0;
  let lastSignal = 0;
  const deque = new Deque<number>();

  for (let i = 0; i < n; i++) {
    const newSignal =
      i === 0 ? 1983 : (lastSignal * 214013 + 2531011) % 2 ** 32;
    lastSignal = newSignal;
    deque.addLast((newSignal % 10000) + 1);
    sum += (newSignal % 10000) + 1;

    while (sum > k) {
      sum -= deque.removeFirst()!;
    }

    if (sum === k) {
      result++;
    }
  }

  return result;
};

for (let i = 1; i <= c; i++) {
  // 합이 k인 부분 수열, 1 <= k <= 5_000_000
  // 길이가 n인 신호 기록, 1 <= n <= 50_000_000
  const [k, n] = input[i].split(" ").map(Number);
  console.log(solve(k, n));
}
