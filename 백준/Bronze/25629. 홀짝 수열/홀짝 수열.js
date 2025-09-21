const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 수열의 길이, 1 <= N <= 100
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 100
const oddCount = arr.reduce((total, current) => {
  if (current % 2 === 1) {
    return total + 1;
  } else {
    return total;
  }
}, 0);

if ((N % 2 === 1 && oddCount === (N + 1) / 2) || (N % 2 === 0 && oddCount === N / 2)) {
  console.log(1);
} else {
  console.log(0);
}