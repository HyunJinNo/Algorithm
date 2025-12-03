const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const T = Number(input[0]); // 테스트 케이스의 개수
let index = 1;
let answer = "";

for (let iter = 0; iter < T; iter++) {
  const N = Number(input[index++]); // 학교의 수, 1 <= N <= 100
  const schools = [];

  for (let iter2 = 0; iter2 < N; iter2++) {
    const [S, L] = input[index++].split(" ");
    schools.push([S, Number(L)]);
  }

  schools.sort((a, b) => b[1] - a[1]);
  answer += `${schools[0][0]}\n`;
}

console.log(answer.trim());