const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: string = require("fs").readFileSync(path).toString().trim();
const arr = input.split(" ").map(Number); // 1 <= arr[i] <= 100

let answer = 0;
for (let i = 0; i < 3; i++) {
  if (arr[i] >= 3) {
    answer += Math.floor(arr[i] / 3);
    arr[i] %= 3;
  }
}

let count = Number.MAX_SAFE_INTEGER;
arr.sort((a: number, b: number) => a - b);
arr.forEach((value: number, index: number) => {
  count = Math.min(count, value + (2 - index));
});
console.log(answer + count);
