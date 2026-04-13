const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().trim().split("\n");

// A: 배열의 크기, 5 <= N <= 10_000
// K: 교환 횟수, 1 <= K <= N
const [A, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 1_000_000_000
let count = 0;
let answer = "-1";

const selectionSort = (arr) => {
  for (let i = A - 1; i >= 1; i--) {
    let maxIndex = i;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
      count++;

      if (count === K) {
        answer = arr.join(" ");
        return;
      }
    }
  }
};

selectionSort(arr);
console.log(answer);