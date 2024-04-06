const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const n = Number(input[0]); // n개의 수, 1 <= n <= 50
const arr: number[][] = Array.from(
  Array(10),
  (value: number, index: number) => {
    return [index, 0];
  }
); // 알파벳 빈도수
const temp = new Set<number>(); // 수의 가장 처음에 주어지는 알파벳 집합

for (let i = 1; i <= n; i++) {
  const str = input[i].trim();
  const len = str.length;
  temp.add(str.charCodeAt(0) - 65);

  for (let j = 0; j < len; j++) {
    const c = str[j];
    arr[c.charCodeAt(0) - 65][1] += 10 ** (len - j - 1);
  }
}

arr.sort((a: number[], b: number[]) => b[1] - a[1]);
for (let i = 9; i >= 0; i--) {
  if (!temp.has(arr[i][0])) {
    arr[i][1] = -1;
    break;
  }
}
arr.sort((a: number[], b: number[]) => b[1] - a[1]);

let num = 9;
let answer = 0;
for (let i = 0; i < 9; i++) {
  answer += arr[i][1] * num;
  num--;
}
console.log(answer);
