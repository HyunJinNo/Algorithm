const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 에너지 구슬의 개수, 3 <= N <= 10
const W = input[1].split(" ").map(Number); // 1 <= W[i] <= 1_000
let answer = 0;

const findAnswer = (total, count) => {
  if (count === N - 2) {
    answer = Math.max(answer, total);
    return;
  }

  for (let i = 1; i <= N - 2; i++) {
    if (W[i] !== 0) {
      const temp = W[i];
      W[i] = 0;

      let leftNum = 0;
      let rightNum = 0;

      for (let j = i; j >= 0; j--) {
        if (W[j] !== 0) {
          leftNum = W[j];
          break;
        }
      }

      for (let j = i; j < N; j++) {
        if (W[j] !== 0) {
          rightNum = W[j];
          break;
        }
      }

      findAnswer(total + leftNum * rightNum, count + 1);

      W[i] = temp;
    }
  }
};

findAnswer(0, 0);
console.log(answer);