const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// n: 선물의 개수, 1 <= n <= 100_000
// b: 예산, 1 <= b <= 1_000_000_000
// a: 반값 할인을 받을 수 있는 최대 선물의 수, 0 <= a <= n
let [n, b, a] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number); // 2 <= arr[i] <= 1_000_000_000, arr[i] % 2 === 0
let index = 0;
const stack = [];

arr.sort((a, b) => a - b);

while (index < n) {
  if (b - arr[index] >= 0) {
    b -= arr[index];
    stack.push(arr[index]);
    index++;
  } else if (a > 0 && b - arr[index] / 2 >= 0) {
    a--;
    b -= arr[index] / 2;
    index++;
  } else if (a > 0 && stack.length > 0) {
    a--;
    b += stack.pop() / 2;
  } else {
    break;
  }
}

console.log(index);
