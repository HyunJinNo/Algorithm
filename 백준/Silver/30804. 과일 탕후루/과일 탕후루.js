const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 과일의 개수, 1 <= N <= 200_000
const S = new Int8Array(input[1].split(" ").map(Number));
const map = new Map([
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
]);
let count = 1;
let startIndex = 0;
let endIndex = 0;
let answer = 0;
map.set(S[0], 1);

while (endIndex < N) {
  while (endIndex < N - 1 && count <= 2) {
    endIndex++;
    map.set(S[endIndex], map.get(S[endIndex]) + 1);

    if (map.get(S[endIndex]) === 1) {
      count++;
    }
  }

  if (endIndex === N - 1) {
    if (count > 2) {
      answer = Math.max(answer, endIndex - startIndex);
    } else {
      answer = Math.max(answer, endIndex - startIndex + 1);
    }
    break;
  }

  answer = Math.max(answer, endIndex - startIndex);

  while (count > 2) {
    map.set(S[startIndex], map.get(S[startIndex]) - 1);

    if (map.get(S[startIndex]) === 0) {
      count--;
    }
    startIndex++;
  }
}

console.log(answer);
