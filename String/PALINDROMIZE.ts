const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const C = Number(input[0]); // 테스트 케이스의 수, 1 <= C <= 50

const getPartialMatch = (str: string): number[] => {
  const m = str.length;
  const pi = Array<number>(m).fill(0);
  let begin = 1;
  let matched = 0;

  while (begin + matched < m) {
    if (str[begin + matched] === str[begin]) {
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

/**
 * a의 접미사이면서 b의 접두사인 문자열의 최대 길이를 구하는 함수
 * @param a 원본 문자열
 * @param b 뒤집은 문자열
 * @returns a의 접미사이면서 b의 접두사인 문자열의 최대 길이
 */
const solve = (a: string, b: string): number => {
  const n = a.length;
  const m = b.length;
  const pi = getPartialMatch(b);
  let begin = 0;
  let matched = 0;

  while (begin < n) {
    if (matched < m && a[begin + matched] === b[matched]) {
      matched++;
      if (begin + matched === n) {
        return matched;
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

  return 0;
};

for (let i = 1; i <= C; i++) {
  const str1 = input[i].trim();
  let str2 = "";
  for (let j = str1.length - 1; j >= 0; j--) {
    str2 += str1[j];
  }

  const result = solve(str1, str2);
  console.log(2 * str1.length - result);
}
