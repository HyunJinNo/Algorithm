const path: string = (process.platform === "linux") ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs").readFileSync(path).toString().split("\n");

const n: number = Number(input[0]); // 저울추의 개수, 1 <= n <= 1,000
const arr: number[] = input[1].split(" ").map(Number); // 저울추의 무게, 1 <= arr[i] <= 1,000,000
arr.sort((a: number, b: number): number => { return a - b });

let result = 0;
for (let i = 0; i < n; i++) {
  if (result + 1 >= arr[i]) {
    result += arr[i];
  } else {
    break;
  }
}
console.log(result + 1);