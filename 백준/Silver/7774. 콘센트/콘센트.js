const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// n: 첫 번째 멀티탭의 개수, 0 <= n <= 100_000
// m: 두 번째 멀티탭의 개수, 0 <= n <= 100_000
const [n, m] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number); // 1 <= a[i] <= 1_000
const b = input[2].split(" ").map(Number); // 1 <= b[i] <= 1_000

a.sort((num1, num2) => num2 - num1);
b.sort((num1, num2) => num2 - num1);

let countA = 1;
let countB = 0;
let indexA = 0;
let indexB = 0;

while (indexA < n && indexB < m) {
  countA--;
  countB += a[indexA++];

  while (countB > 0 && indexB < m) {
    countB--;
    countA += b[indexB++];
  }
}

console.log(countA);