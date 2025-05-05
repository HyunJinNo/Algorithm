const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 굴다리의 길이, 1 <= N <= 100_000
const M = Number(input[1]); // 가로등의 개수수, 1 <= M <= N
const arr = input[2].split(" ").map(Number);

let min = arr[0];
let max = 100_000;

const check = (height) => {
  let result = true;
  let pos = 0;

  for (let i = 0; i < M; i++) {
    if (arr[i] - height <= pos) {
      pos = arr[i] + height;
    } else {
      result = false;
      break;
    }
  }

  if (pos < N) {
    result = false;
  }

  return result;
};

while (min < max) {
  const mid = Math.floor((min + max) / 2);

  if (check(mid)) {
    max = mid;
  } else {
    min = mid + 1;
  }
}

console.log(min);
