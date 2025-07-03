const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 역의 수, 2 <= N <= 500_000
const A = input[1].split(" ").map(Number);
let flag = true; // true: 세훈의 턴, false: 민아의 턴

for (let i = 1; i < N; i++) {
  if (A[i] === 1) {
    flag = !flag;
  } else if (i + 1 < N && A[i + 1] === 1) {
    let count = 0;

    for (let j = 1; i + j < N; j++) {
      if (A[i + j] === 0) {
        break;
      }
      count++;
    }

    if (count % 2 === 1) {
      flag = !flag;
    }
  }
}

console.log(flag ? "mnx" : "alsdkffhgk");