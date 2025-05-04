const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 친구의 수, 1 <= N <= 1_000
// B: 금액, 1 <= B <= 1_000_000_000
const [N, B] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((str) => str.split(" ").map(Number));

arr.sort((a, b) => {
  if (a[0] + a[1] !== b[0] + b[1]) {
    return a[0] + a[1] - (b[0] + b[1]);
  } else {
    return b[0] - a[0];
  }
});

let total = 0;
let index = 0;
let maxP = 0;

while (index < N) {
  maxP = Math.max(maxP, arr[index][0]);

  if (total + arr[index][0] + arr[index][1] <= B) {
    total += arr[index][0] + arr[index][1];
    index++;
  } else {
    total -= Math.ceil(maxP / 2);

    if (total + arr[index][0] + arr[index][1] <= B) {
      index++;
    }
    break;
  }
}

console.log(index);
