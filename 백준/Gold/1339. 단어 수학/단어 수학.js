const path = (process.platform === "linux") ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(path).toString().split("\n").map((str) => str.trim());
const n = Number(input[0]); // 단어의 개수, 1 <= n <= 10
let maxLength = -1;

// 단어의 최대 길이 구하기
for (let i = 1; i <= n; i++) {
  const str = input[i];
  maxLength = Math.max(maxLength, str.length);
}

// 알파벳 빈도수 계산하기
const arr = Array(26).fill(0);
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < input[i].length; j++) {
    const c = input[i][j];
    arr[c.charCodeAt() - 65] += Math.pow(10, input[i].length - j - 1);
  }
}

arr.sort((a, b) => b - a);
let num = 9;
let answer = 0;
for (let i = 0; i < 10; i++) {
  answer += (arr[i] * num);
  num--;
}
console.log(answer);