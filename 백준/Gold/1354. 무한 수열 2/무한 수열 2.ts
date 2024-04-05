const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: string = require("fs").readFileSync(path).toString().trim();

// 0 <= n <= 10_000_000_000_000
// 2 <= p <= 1_000_000_000
// 2 <= q <= 1_000_000_000
// 0 <= x <= 1_000_000_000
// 0 <= y <= 1_000_000_000
const [n, p, q, x, y] = input.split(" ").map(Number);
const map = new Map<number, number>();

/**
 * A[i]를 구하는 함수
 * @param i 인덱스
 * @returns A[i] 값
 */
const solve = (i: number): number => {
  if (i <= 0) {
    return 1;
  } else if (map.get(i) !== undefined) {
    return map.get(i)!;
  } else {
    const result = solve(Math.floor(i / p) - x) + solve(Math.floor(i / q) - y);
    map.set(i, result);
    return result;
  }
};

console.log(solve(n));
