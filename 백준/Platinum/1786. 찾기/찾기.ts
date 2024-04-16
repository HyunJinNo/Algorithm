const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const [T, P] = input.map((str) => str.trimEnd());

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

/**
 * 긴 문자열 H의 부분 문자열로 짧은 문자열 N이 출현하는 시작 위치들을 모두 반환하는 함수
 * @param H 긴 문자열
 * @param N 짧은 문자열
 * @returns 긴 문자열 H의 부분 문자열로 짧은 문자열 N이 출현하는 시작 위치들을 담은 배열
 */
const kmpSearch = (H: string, N: string): number[] => {
  const n: number = H.length;
  const m: number = N.length;
  const result: number[] = [];
  const pi: number[] = getPartialMatch(N);

  let begin: number = 0;
  let matched: number = 0;

  while (begin <= n - m) {
    if (matched < m && H[begin + matched] === N[matched]) {
      matched++;

      // 결과적으로 m글자가 모두 일치했다면 답에 추가한다.
      if (matched === m) {
        result.push(begin + 1);
      }
    } else {
      // 예외: matched가 0인 경우에는 다음 칸에서부터 계속
      if (matched === 0) {
        begin++;
      } else {
        begin += matched - pi[matched - 1];

        // begin을 옮겼다고 처음부터 다시 비교할 필요가 없디.
        // 옮긴 후에도 pi[matched - 1]만큼은 항상 일치한다.
        matched = pi[matched - 1];
      }
    }
  }

  return result;
};

const result = kmpSearch(T, P);
console.log(result.length);
console.log(result.join(" "));
