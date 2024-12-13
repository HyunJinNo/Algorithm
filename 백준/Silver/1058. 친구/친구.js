const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 사람의 수, 1 <= N <= 50
const arr = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  arr.push(
    input[i]
      .trim()
      .split("")
      .map((value) => (value === "Y" ? 1 : Infinity)),
  );
}

for (let m = 0; m < N; m++) {
  for (let s = 0; s < N; s++) {
    for (let e = 0; e < N; e++) {
      if (arr[s][e] > arr[s][m] + arr[m][e]) {
        arr[s][e] = arr[s][m] + arr[m][e];
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  arr[i][i] = 0;
  answer = Math.max(
    answer,
    arr[i].reduce((total, current) => {
      if (current === 1 || current === 2) {
        return total + 1;
      } else {
        return total;
      }
    }, 0),
  );
}

console.log(answer);
