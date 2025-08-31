const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 3 <= N <= 8
const A = input[1].split(" ").map(Number); // -100 <= A[i] <= 100

const arr = Array(N).fill(0);
const visited = Array(N).fill(false);
let answer = 0;

const findAnswer = (index) => {
  if (index === N) {
    let sum = 0;
    for (let i = 0; i < N - 1; i++) {
      sum += Math.abs(arr[i] - arr[i + 1]);
    }

    answer = Math.max(answer, sum);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr[index] = A[i];
      findAnswer(index + 1);
      visited[i] = false;
    }
  }
};

findAnswer(0);
console.log(answer);