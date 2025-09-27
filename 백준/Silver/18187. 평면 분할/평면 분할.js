const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();

const N = Number(input); // 그릴 수 있는 직선의 개수의 최댓값, 1 <= N <= 100
const arr = new Array(101).fill(0);
arr[1] = 2;
arr[2] = 4;
let plus = 3;

for (let i = 3; i <= 100; i++) {
  arr[i] = arr[i - 1] + plus;

  if (i % 3 !== 0) {
    plus++;
  }
}

console.log(arr[N]);