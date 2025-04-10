const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

const N = Number(input[0]); // 행렬의 크기, 1 <= N <= 1_000
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const answer = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let num = Math.max(...arr[i]);

  while (true) {
    let flag = true;
    for (let j = 0; j < N; j++) {
      if (i === j) {
        continue;
      }

      if ((num & arr[i][j]) !== arr[i][j]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      break;
    } else {
      num++;
    }
  }

  answer[i] = num;
}

console.log(answer.toString().replaceAll(",", " "));
