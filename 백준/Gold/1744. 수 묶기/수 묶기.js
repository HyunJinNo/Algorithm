const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 수열의 크기, 1 <= N <= 50
const arr1 = [];
const arr2 = [];

for (let i = 1; i <= N; i++) {
  const num = Number(input[i]); // -1_000 <= arr[i] <= 1_000
  if (num <= 0) {
    arr1.push(num);
  } else {
    arr2.push(num);
  }
}

arr1.sort((a, b) => b - a);
arr2.sort((a, b) => a - b);

let length1 = arr1.length;
let length2 = arr2.length;
let answer = 0;

while (length1 > 1) {
  const a = arr1.pop();
  const b = arr1.pop();
  length1 -= 2;
  answer += a * b;
}

if (length1 === 1) {
  answer += arr1[0];
}

while (length2 > 1) {
  const a = arr2.pop();
  const b = arr2.pop();
  length2 -= 2;

  if (a === 1 || b === 1) {
    answer += a + b;
  } else {
    answer += a * b;
  }
}

if (length2 === 1) {
  answer += arr2[0];
}

console.log(answer);
