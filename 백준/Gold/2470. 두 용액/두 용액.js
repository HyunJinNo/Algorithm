const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 전체 용액의 수, 2 <= N <= 100_000
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b); // 오름차순 정렬

let left = 0;
let right = N - 1;
let minimum = Number.MAX_SAFE_INTEGER;
const answer = [0, 0];

while (left < right) {
  const temp = arr[right] + arr[left];
  if (Math.abs(temp) < minimum) {
    minimum = Math.abs(temp);
    answer[0] = arr[left];
    answer[1] = arr[right];
  }

  if (temp > 0) {
    right--;
  } else {
    left++;
  }
}

console.log(answer.join(" "));
