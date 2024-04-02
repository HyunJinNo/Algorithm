const path: string = (process.platform === "linux") ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 수의 개수, 1 <= n <= 1,000
const arr: string[] = input[1].split(" "); // 0 <= arr[i] <= 1,000,000,000
arr.sort((a: string, b: string): number => {
  if ((b + a) > (a + b)) {
    return 1;
  } else {
    return -1;
  }
});

const result = arr.join("");
if (result[0] === "0") {
  console.log(0);
} else {
  console.log(result);
}