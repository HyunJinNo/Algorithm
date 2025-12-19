const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]); // 수열의 크기, 1 <= N <= 2_000
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 100_000
const M = Number(input[2]); // 질문의 개수, 1 <= M <= 1_000_000
let answer = "";

const cache = Array.from({ length: N }, () => Array(N).fill(-1));

for (let i = 0; i < N; i++) {
  cache[i][i] = 1;
}

const isPalindrome = (S, E) => {
  if (S >= E) {
    return 1;
  } else if (cache[S][E] !== -1) {
    return cache[S][E];
  }

  let result = 1;

  if (arr[S] !== arr[E]) {
    result = 0;
  } else {
    result *= isPalindrome(S + 1, E - 1);
  }

  cache[S][E] = result;
  return result;
};

for (let i = 3; i < 3 + M; i++) {
  const [S, E] = input[i].split(" ").map((value) => Number(value) - 1);
  answer += `${isPalindrome(S, E)}\n`;
}

console.log(answer.trim());