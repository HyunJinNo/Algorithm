const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: string = require("fs").readFileSync(path).toString().trim();
const n = Number(input); // 길이, 1 <= n <= 100
const cache: number[][][] = Array.from(Array(n), () =>
  Array.from(Array(10), () => new Array(1 << 10).fill(-1))
); // [index, current, used]

/**
 * 길이가 n이면서 0부터 9까지 숫자가 모두 등장하는 계단 수의 개수를 구하는 함수
 * @param index 현재 index
 * @param current 현재 index 위치에 있는 숫자
 * @param used 지금까지 사용한 숫자의 집합
 * @returns 길이가 n이면서 0부터 9까지 숫자가 모두 등장하는 계단 수의 개수
 */
const solve = (index: number, current: number, used: number): number => {
  if (cache[index][current][used] !== -1) {
    return cache[index][current][used];
  } else if (index === n - 1) {
    if (used === (1 << 10) - 1) {
      cache[index][current][used] = 1;
    } else {
      cache[index][current][used] = 0;
    }
    return cache[index][current][used];
  }

  let result = 0;
  switch (current) {
    case 0:
      result += solve(index + 1, 1, used | (1 << 1));
      break;
    case 9:
      result += solve(index + 1, 8, used | (1 << 8));
      break;
    default:
      result += solve(index + 1, current - 1, used | (1 << (current - 1)));
      result += solve(index + 1, current + 1, used | (1 << (current + 1)));
  }

  cache[index][current][used] = result % 1_000_000_000;
  return result;
};

let answer = 0;
for (let x = 1; x <= 9; x++) {
  answer += solve(0, x, 1 << x);
  answer %= 1_000_000_000;
}
console.log(answer);
