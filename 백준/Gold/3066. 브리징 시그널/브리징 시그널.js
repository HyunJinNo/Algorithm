const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

let index = 0;
const T = Number(input[index++]); // 테스트 케이스의 개수

for (let i = 0; i < T; i++) {
  const N = Number(input[index++]); // 포트의 개수, 1 <= N <= 40_000
  const arr = [];

  for (let j = 0; j < N; j++) {
    arr.push(Number(input[index++]));
  }

  const lis = [arr[0]];

  for (let j = 1; j < N; j++) {
    if (arr[j] <= lis[0]) {
      lis[0] = arr[j];
    } else if (arr[j] > lis[lis.length - 1]) {
      lis.push(arr[j]);
    } else {
      let left = 0;
      let right = lis.length - 1;

      while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[j] <= lis[mid]) {
          right = mid;
        } else {
          left = mid;
        }
      }

      lis[right] = arr[j];
    }
  }

  console.log(lis.length);
}
