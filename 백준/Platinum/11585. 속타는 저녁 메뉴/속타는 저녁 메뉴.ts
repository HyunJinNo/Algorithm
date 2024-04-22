const getPartialMatch = (N: String) => {
  const m = N.length;
  const pi = Array<number>(m).fill(0);

  let begin = 1;
  let matched = 0;

  while (begin + matched < m) {
    if (N[begin + matched] === N[matched]) {
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

const kmpSearch = (H: string, N: string) => {
  const n = H.length / 2;
  const m = N.length;
  const result: number[] = [];
  const pi = getPartialMatch(N);

  let begin = 0;
  let matched = 0;

  while (begin < n) {
    if (matched < m && H[begin + matched] === N[matched]) {
      matched++;
      if (matched === m) {
        result.push(begin);
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

  return result.length;
};

const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
let N = Number(input[0]); // 원형 룰렛의 칸 수, 1 <= N <= 1_000_000
const str1 = input[1].trim().split(" ").join("");
const str2 = input[2].trim().split(" ").join("");

let result = kmpSearch(str1 + str1, str2);
for (let num = result; num > 1; num--) {
  if (result % num === 0 && N % num === 0) {
    result /= num;
    N /= num;
  }
}

console.log(`${result}/${N}`);
