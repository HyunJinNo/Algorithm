const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 1 <= N <= 1_000_000
const a = input[1].split(" ").map(Number); // 1 <= a[i] <= 1_000_000_000

const checkIncreasingSequence = () => {
  let minIndex = 0;
  let minValue = 1_000_000_001;

  for (let i = 0; i < N; i++) {
    if (a[i] < minValue) {
      minIndex = i;
      minValue = a[i];
    }
  }

  const arr = [];

  for (let i = minIndex; i < N; i++) {
    arr.push(a[i]);
  }

  for (let i = 0; i < minIndex; i++) {
    arr.push(a[i]);
  }

  for (let i = 1; i < N; i++) {
    if (arr[i - 1] > arr[i]) {
      return 1_000_000_001;
    }
  }

  return minIndex;
};

const checkDescreasingSequence = () => {
  let maxIndex = 0;
  let maxValue = 0;

  for (let i = 0; i < N; i++) {
    if (maxValue < a[i]) {
      maxIndex = i;
      maxValue = a[i];
    }
  }

  const arr = [];

  for (let i = maxIndex - 1; i >= 0; i--) {
    arr.push(a[i]);
  }

  for (let i = N - 1; i >= maxIndex; i--) {
    arr.push(a[i]);
  }

  for (let i = 1; i < N; i++) {
    if (arr[i - 1] > arr[i]) {
      return 1_000_000_001;
    }
  }

  return maxIndex;
};

const answer = Math.min(checkIncreasingSequence(), checkDescreasingSequence());

console.log(answer === 1_000_000_001 ? -1 : answer);