const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 식탁의 길이, 1 <= N <= 20_000
// K: 햄버거를 선택할 수 있는 거리, 1 <= K <= 10
const [N, K] = input[0].split(" ").map(Number);
const str = input[1].trim();
const hamburger = [];
let index = 0;
let answer = 0;

for (let i = 0; i < N; i++) {
  if (str[i] === "H") {
    hamburger.push(i);
  }
}

for (let i = 0; i < N; i++) {
  if (str[i] === "P") {
    while (index < hamburger.length) {
      if (hamburger[index] >= i - K && hamburger[index] <= i + K) {
        answer++;
        index++;
        break;
      } else if (hamburger[index] < i - K) {
        index++;
      } else {
        break;
      }
    }
  }
}

console.log(answer);