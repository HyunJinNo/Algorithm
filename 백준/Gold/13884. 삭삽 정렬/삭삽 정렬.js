const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const P = Number(input[0]); // 테스트 케이스의 개수, 1 <= P <= 100
let index = 1;
let answer = "";

for (let iter = 1; iter <= P; iter++) {
  // K: 테스트 세트의 번호
  // N: 공백 이후 정렬할 배열의 길이, 1 <= N <= 1_000
  const [K, N] = input[index++].split(" ").map(Number);
  const arr = [];

  for (let iter2 = Math.floor((N - 1) / 10); iter2 >= 0; iter2--) {
    arr.push(...input[index++].split(" ").map(Number));
  }

  const sortedArr = [...arr].sort((a, b) => a - b);
  let arrIndex = 0;

  for (let i = 0; i < N; i++) {
    if (arr[i] === sortedArr[arrIndex]) {
      arrIndex++;
    }
  }

  answer += `${K} ${N - arrIndex}\n`;
}

console.log(answer.trim());