const getPartialMatch = (P) => {
  const m = P.length;
  const pi = Array(m).fill(0);

  let begin = 1;
  let matched = 0;

  while (begin + matched < m) {
    if (P[begin + matched] === P[matched]) {
      matched++;
      pi[begin + matched - 1] = matched;
    } else {
      if (matched === 0) {
        begin++;
      } else {
        begin += matched - pi[matched - 1];
        matched = pi[matched - 1];
      }
    }
  }

  return pi;
};

const KmpSearch = (S, P) => {
  const n = S.length;
  const m = P.length;
  const pi = getPartialMatch(P);
  let answer = 0;

  let begin = 0;
  let matched = 0;

  while (begin <= n - m) {
    if (matched < m && S[begin + matched] === P[matched]) {
      matched++;

      if (matched === m) {
        answer++;
      }
    } else {
      if (matched === 0) {
        begin++;
      } else {
        begin += matched - pi[matched - 1];
        matched = pi[matched - 1];
      }
    }
  }

  return answer;
};

const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 1 <= N <= 1_000_000
const M = Number(input[1]); // S의 길이, 2 * N + 1 <= M <= 1_000_000
const S = input[2].trim();

let P = "IOI";
for (let i = 2; i <= N; i++) {
  P += "OI";
}

console.log(KmpSearch(S, P));
