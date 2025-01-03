const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

let [N, A, B] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);
let answer = 0;

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

if (N % 2 === 1) {
  answer += arr1.pop();
  A--;
  N--;
}

while (N > 0) {
  if (A <= 1 || arr1[A - 1] + arr1[A - 2] <= arr2[B - 1]) {
    answer += arr2.pop();
    B--;
  } else {
    answer += arr1.pop();
    answer += arr1.pop();
    A -= 2;
  }
  N -= 2;
}

console.log(answer);
