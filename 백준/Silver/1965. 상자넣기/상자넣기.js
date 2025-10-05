const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const n = Number(input[0]); // 상자의 개수, 1 <= n <= 1_000
const arr = input[1].split(" ").map(Number); // arr[i]: 각 상자의 크기, 1 <= arr[i] <= 1_000

const lis = [arr[0]];

for (let i = 1; i < n; i++) {
  if (arr[i] <= lis[0]) {
    lis[0] = arr[i];
  } else if (arr[i] > lis[lis.length - 1]) {
    lis.push(arr[i]);
  } else {
    let left = 0;
    let right = lis.length - 1;

    while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[i] <= lis[mid]) {
        right = mid;
      } else {
        left = mid;
      }
    }

    lis[right] = arr[i];
  }
}

console.log(lis.length);