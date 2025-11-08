const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 수열 A의 길이, 1 <= N <= 100
const A = input[1].split(" ").map(Number); // 1 <= A[i] <= 100
const M = Number(input[2]); // 수열 B의 길이, 1 <= M <= 100
const B = input[3].split(" ").map(Number); // 1 <= B[i] <= 100
const answer = [];

let startIndex1 = 0;
let startIndex2 = 0;

while (startIndex1 < N && startIndex2 < M) {
  let index1 = startIndex1;
  let index2 = startIndex2;
  let maxNum = 0;

  for (let i = startIndex1; i < N; i++) {
    for (let j = startIndex2; j < M; j++) {
      if (A[i] === B[j] && A[i] > maxNum) {
        maxNum = A[i];
        index1 = i;
        index2 = j;
      }
    }
  }

  if (maxNum === 0) {
    break;
  } else {
    startIndex1 = index1 + 1;
    startIndex2 = index2 + 1;
    answer.push(maxNum);
  }
}

console.log(answer.length);
console.log(answer.toString().replaceAll(",", " "));