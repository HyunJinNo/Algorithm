const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 배열의 크기, 5 <= N <= 10_000
// K: 교환 횟수, 1 <= N <= Math.pow(N, 2)
const [N, K] = input[0].split(" ").map(Number);
const arr = new Int32Array(input[1].split(" ").map(Number)); // 1 <= arr[i] <= 1_000_000_000
let count = 0;
let answer = "-1";

loop: for (let i = N - 1; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    if (arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      count++;
    }

    if (count === K) {
      answer = `${arr[j - 1]} ${arr[j]}`;
      break loop;
    }
  }
}

console.log(answer);