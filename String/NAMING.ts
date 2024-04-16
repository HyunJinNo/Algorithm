const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const str = input
  .map((value) => value.trim())
  .reduce((total, current) => (total += current));

/**
 * KMP 알고리즘을 이용해 부분 일치 테이블을 생성하는 함수
 * @param N 짧은 문자열
 * @returns 부분 일치 테이블
 */
const getPartialMatch = (N: string): number[] => {
  const m: number = N.length;
  const pi: number[] = Array<number>(m).fill(0);

  // KMP로 자기 자신을 찾는다.
  // begin이 0이면 자기 자신을 찾으므로 제외한다.
  let begin = 1;
  let matched = 0;

  // 비교할 문자가 N의 끝에 도달할 때까지 찾으면서 부분 일치를 모두 기록한다.
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

const solve = (str: string): number[] => {
  const result: number[] = [];
  const pi: number[] = getPartialMatch(str);
  let k = str.length;

  while (k > 0) {
    result.push(k);
    k = pi[k - 1];
  }

  return result;
};

const result = solve(str);
let answer = "";
for (let i = result.length - 1; i >= 0; i--) {
  answer += `${result[i]} `;
}
console.log(answer);
