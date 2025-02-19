const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// L: 통나무의 길이, 2 <= L <= 1_000_000_000
// K: 통나무를 자를 수 있는 위치의 수, 1 <= K <= 10_000
// C: 통나무를 자를 수 있는 횟수, 1 <= C <= 10_000
const [L, K, C] = input[0].split(" ").map(Number);
const arr = new Int32Array(input[1].split(" ").map(Number));
arr.sort((a, b) => a - b);

let start = arr[0];
let end = L;
let startTarget = 0; // 처음 자르는 위치

while (start < end) {
  const mid = Math.floor((start + end) / 2);
  let before = L;
  let flag = true;
  let count = 0; // 자르는 횟수

  for (let i = K - 1; i >= 0; i--) {
    if (before - arr[i] > mid) {
      if (i === K - 1 || arr[i + 1] === before) {
        flag = false;
        break;
      } else {
        if (before - arr[i + 1] > mid) {
          flag = false;
          break;
        }

        before = arr[i + 1];
        count++;
      }
    }
  }

  if (before > mid) {
    before = arr[0];
    count++;
  }

  if (count > C) {
    flag = false;
  } else if (count < C && before !== arr[0]) {
    before = arr[0];
  }

  if (flag) {
    startTarget = before;
    end = mid;
  } else {
    start = mid + 1;
  }
}

console.log(`${end} ${startTarget}`);
