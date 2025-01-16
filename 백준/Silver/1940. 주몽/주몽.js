const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 재료의 개수, 1 <= N <= 15_000
const M = Number(input[1]); // 갑옷을 만드는데 필요한 수, 1 <= M <= 10_000_000
const arr = new Int32Array(input[2].split(" ").map(Number)); // 1 <= arr[i] <= 100_000

arr.sort((a, b) => a - b);
let startIndex = 0;
let endIndex = N - 1;
let answer = 0;

while (startIndex < endIndex) {
  const sum = arr[startIndex] + arr[endIndex];

  if (sum === M) {
    answer++;
    startIndex++;
    endIndex--;
  } else if (sum > M) {
    endIndex--;
  } else {
    startIndex++;
  }
}

console.log(answer);
