const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");

const k = Number(input[0]); // 색의 개수, 1 <= k <= 100_000
const x = input[1].split(" ").map(Number); // 1 <= x[i] <= 1_000_000_000

let answer = 0;
for (let i = 0; i < k; i++) {
  if (x[i] >= k) {
    answer += Math.floor(x[i] / k);
    x[i] %= k;
  }
}

let count = Number.MAX_SAFE_INTEGER;
x.sort((a: number, b: number) => a - b);
x.forEach((value: number, index: number) => {
  count = Math.min(count, value + (k - index - 1));
});
console.log(answer + count);
