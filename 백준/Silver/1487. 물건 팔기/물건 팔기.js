const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 물건을 구매할 의향이 있는 사람의 수, 1 <= N <= 50
const arr = input.slice(1).map((str) => str.split(" ").map(Number));
arr.sort((a, b) => b[0] - a[0]);
let answer = 0;
let total = 0;

for (let i = 0; i < N; i++) {
  let result = 0;

  for (let j = 0; j <= i; j++) {
    if (arr[i][0] > arr[j][1]) {
      result += arr[i][0] - arr[j][1];
    }
  }

  if (result >= total) {
    total = result;
    answer = arr[i][0];
  }
}

console.log(total === 0 ? 0 : answer);
