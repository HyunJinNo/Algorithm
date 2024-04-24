const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");

const N = Number(input[0]); // 체크포인트의 수, 3 <= N <= 10_000
const checkPoints: number[][] = [];
for (let i = 1; i <= N; i++) {
  checkPoints.push(input[i].split(" ").map(Number));
}

const cache = Array.from(Array(N), () => Array(2).fill(-1)); // [index, skipped]

const solve = (index: number, skipped: number): number => {
  if (index === N - 1) {
    return 0;
  } else if (cache[index][skipped] !== -1) {
    return cache[index][skipped];
  }

  let result = Number.MAX_SAFE_INTEGER;

  if (skipped === 1 && index !== N - 2) {
    result = Math.min(
      result,
      Math.abs(checkPoints[index][0] - checkPoints[index + 1][0]) +
        Math.abs(checkPoints[index][1] - checkPoints[index + 1][1]) +
        solve(index + 1, skipped)
    );

    result = Math.min(
      result,
      Math.abs(checkPoints[index][0] - checkPoints[index + 2][0]) +
        Math.abs(checkPoints[index][1] - checkPoints[index + 2][1]) +
        solve(index + 2, skipped - 1)
    );
  } else {
    result = Math.min(
      result,
      Math.abs(checkPoints[index][0] - checkPoints[index + 1][0]) +
        Math.abs(checkPoints[index][1] - checkPoints[index + 1][1]) +
        solve(index + 1, skipped)
    );
  }

  cache[index][skipped] = result;
  return result;
};

console.log(solve(0, 1));
