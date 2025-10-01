const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 아이들의 수, 2 <= N <= 200
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

const lis = [arr[0]];

for (let i = 1; i < N; i++) {
  if (arr[i] <= lis[0]) {
    lis[0] = arr[i];
  } else if (arr[i] > lis[lis.length - 1]) {
    lis.push(arr[i]);
  } else {
    let left = 0;
    let right = lis.length - 1;

    while (left + 1 < right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[i] <= lis[mid]) {
        right = mid;
      } else {
        left = mid;
      }
    }

    lis[right] = arr[i];
  }
}

console.log(N - lis.length);