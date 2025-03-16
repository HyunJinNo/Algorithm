const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

let index = 0;
const T = Number(input[index++]); // 테스트 케이스의 수
let answer = "";

const solution = (S, N) => {
  let result = 0;

  for (let i = 0; i < N; i++) {
    const lis = [S[i]];
    let length = 1;

    for (let j = i; j < N; j++) {
      if (S[j] <= lis[0]) {
        lis[0] = S[j];
      } else if (S[j] > lis[length - 1]) {
        lis.push(S[j]);
        length++;
      } else {
        let left = 0;
        let right = length - 1;

        while (left + 1 < right) {
          const mid = Math.floor((left + right) / 2);
          if (S[j] <= lis[mid]) {
            right = mid;
          } else {
            left = mid;
          }
        }

        lis[right] = S[j];
      }

      result += length;
    }
  }

  return result;
};

for (let i = 0; i < T; i++) {
  const N = Number(input[index++]); // S의 길이, 1 <= N <= 500
  const S = [];

  for (let j = 0; j < N; j++) {
    S.push(Number(input[index++]));
  }

  answer += `Case #${i + 1}: ${solution(S, N)}\n`;
}

process.stdout.write(answer.trim());
