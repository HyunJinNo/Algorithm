const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const left = new Map([
  ["q", [0, 0]],
  ["w", [0, 1]],
  ["e", [0, 2]],
  ["r", [0, 3]],
  ["t", [0, 4]],
  ["a", [1, 0]],
  ["s", [1, 1]],
  ["d", [1, 2]],
  ["f", [1, 3]],
  ["g", [1, 4]],
  ["z", [2, 0]],
  ["x", [2, 1]],
  ["c", [2, 2]],
  ["v", [2, 3]],
]);

const right = new Map([
  ["y", [0, 5]],
  ["u", [0, 6]],
  ["i", [0, 7]],
  ["o", [0, 8]],
  ["p", [0, 9]],
  ["h", [1, 5]],
  ["j", [1, 6]],
  ["k", [1, 7]],
  ["l", [1, 8]],
  ["b", [2, 4]],
  ["n", [2, 5]],
  ["m", [2, 6]],
]);

const [L, R] = input[0].trim().split(" ");
const leftIndex = [...left.get(L)];
const rightIndex = [...right.get(R)];
const str = input[1].trim(); // 1 <= str.length <= 100
let answer = 0;

for (let c of str) {
  if (left.has(c)) {
    const arr = left.get(c);
    answer +=
      1 + Math.abs(leftIndex[0] - arr[0]) + Math.abs(leftIndex[1] - arr[1]);
    leftIndex[0] = arr[0];
    leftIndex[1] = arr[1];
  } else {
    const arr = right.get(c);
    answer +=
      1 + Math.abs(rightIndex[0] - arr[0]) + Math.abs(rightIndex[1] - arr[1]);
    rightIndex[0] = arr[0];
    rightIndex[1] = arr[1];
  }
}
console.log(answer);
