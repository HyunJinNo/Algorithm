const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const N = Number(input[0]); // 1 <= N <= 100_000
const A = input[1].split(" ").map(Number); // 1 <= A[i] <= 100_000
let maxValue = 0;
let minValue = 100_001;
let maxIndexList = [0];
let minIndexList = [0];
let answer = N;

for (let i = 0; i < N; i++) {
  if (maxValue < A[i]) {
    maxValue = A[i];
    maxIndexList = [i];
  } else if (maxValue === A[i]) {
    maxIndexList.push(i);
  }

  if (minValue > A[i]) {
    minValue = A[i];
    minIndexList = [i];
  } else if (minValue === A[i]) {
    minIndexList.push(i);
  }
}

const length1 = maxIndexList.length;
const length2 = minIndexList.length;

for (let i = 0; i < length1; i++) {
  const index = maxIndexList[i];
  let startIndex = 0;
  let endIndex = length2;

  while (startIndex + 1 < endIndex) {
    const middle = Math.floor((startIndex + endIndex) / 2);

    if (index <= minIndexList[middle]) {
      endIndex = middle;
    } else {
      startIndex = middle;
    }
  }

  if (startIndex >= 0 && startIndex < length2) {
    answer = Math.min(answer, Math.abs(index - minIndexList[startIndex]) + 1);
  }
  if (endIndex >= 0 && endIndex < length2) {
    answer = Math.min(answer, Math.abs(index - minIndexList[endIndex]) + 1);
  }
}

console.log(answer);
