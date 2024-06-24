const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 멀티탭 구멍의 개수, 1 <= N <= 100
// K: 전기 용품의 총 사용횟수, 1 <= K <= 100
let [N, K] = input[0].trim().split(" ").map(Number);
const arr = new Int8Array(input[1].trim().split(" ").map(Number)); // 1 <= arr[i] <= K
const current = new Set();
let answer = 0;

for (let i = 0; i < K; i++) {
  const key = arr[i];

  if (current.has(key)) {
    continue;
  }
  if (N > 0) {
    current.add(key);
    N--;
    continue;
  }

  let target = -1;
  let maxIndex = -1;

  for (let temp of current) {
    let isFound = false;

    for (let j = i + 1; j < K; j++) {
      if (arr[j] === temp) {
        isFound = true;
        if (maxIndex < j) {
          target = temp;
          maxIndex = j;
        }
        break;
      }
    }

    if (!isFound) {
      target = temp;
      break;
    }
  }

  current.delete(target);
  current.add(key);
  answer++;
}
console.log(answer);
