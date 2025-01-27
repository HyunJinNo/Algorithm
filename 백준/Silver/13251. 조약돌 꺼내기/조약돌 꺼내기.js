const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const M = Number(input[0]); // 조약돌의 색상 종류, 1 <= M <= 50
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 50
const K = Number(input[2]); // 조약돌을 랜덤하게 뽑는 횟수, 1 <= K <= N
const count = arr.reduce((total, current) => total + current, 0);
const cache = Array.from({ length: count + 1 }, () => Array(count + 1).fill(0));

for (let i = 1; i <= count; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i) {
      cache[i][j] = 1;
    } else {
      cache[i][j] = cache[i - 1][j] + cache[i - 1][j - 1];
    }
  }
}

let answer = 0;
arr.forEach((value) => {
  answer += cache[value][K];
});
answer /= cache[count][K];

console.log(answer);
