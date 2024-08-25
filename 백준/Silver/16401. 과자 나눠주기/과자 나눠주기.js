const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// M: 조카의 수, 1 <= M <= 1_000_000
// N: 과자의 수, 1 <= N <= 1_000_000
const [M, N] = input[0].trim().split(" ").map(Number);
const L = new Int32Array(input[1].trim().split(" ").map(Number));

let start = 0;
let end = 1_000_000_001;

while (start + 1 < end) {
  const mid = Math.floor((start + end) / 2);
  let result = 0;

  L.forEach((value) => {
    result += Math.floor(value / mid);
  });

  if (result >= M) {
    start = mid;
  } else {
    end = mid;
  }
}

console.log(start);
