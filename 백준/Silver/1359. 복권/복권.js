const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();

// N: 수의 개수, 2 <= N <= 8
// 1 <= M <= N - 1
// 1 <= K <= M
const [N, M, K] = input.split(" ").map(Number);
const visited = new Int8Array(Array(N).fill(false));
const A = [];
const B = [];
let answer = 0;

const findAllCases = (index, count) => {
  if (count === M) {
    const temp = [];
    for (let i = 0; i < N; i++) {
      if (visited[i]) {
        temp.push(i);
      }
    }

    A.push(temp);
    B.push(temp);

    return;
  } else if (index === N) {
    return;
  }

  visited[index] = true;
  findAllCases(index + 1, count + 1);
  visited[index] = false;

  findAllCases(index + 1, count);
};

findAllCases(0, 0);

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < B.length; j++) {
    let count = 0;

    loop: for (let index1 = 0; index1 < M; index1++) {
      for (let index2 = 0; index2 < M; index2++) {
        if (A[i][index1] === B[j][index2]) {
          count++;
          continue loop;
        }
      }
    }

    if (count >= K) {
      answer++;
    }
  }
}

console.log(answer / (A.length * B.length));