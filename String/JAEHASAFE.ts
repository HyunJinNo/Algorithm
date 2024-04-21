const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const C = Number(input[0]); // 테스트 케이스의 수, 1 <= C <= 50
let index = 1;

// TypeScript

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

const kmpSearch = (H: string, N: string): number => {
  const n: number = H.length;
  const m: number = N.length;
  const pi: number[] = getPartialMatch(N);

  let begin: number = 0;
  let matched: number = 0;

  while (begin <= n - m) {
    if (matched < m && H[begin + matched] === N[matched]) {
      matched++;

      // 결과적으로 m글자가 모두 일치했다면 답에 추가한다.
      if (matched === m) {
        return begin;
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

  return n - m;
};

for (let iter = 0; iter < C; iter++) {
  const N = Number(input[index++]); // 금고를 열기 위해 맟춰야 하는 상태의 수, 1 <= N <= 100
  let result = 0;
  let flag = true; // true: 시계 방향, false: 반 시계 방향

  for (let i = 0; i < N; i++) {
    const str1 = input[index].trim();
    const str2 = input[index + 1].trim();
    if (flag) {
      result += kmpSearch(str2 + str2, str1);
    } else {
      result += kmpSearch(str1 + str1, str2);
    }

    index++;
    flag = !flag;
  }

  console.log(result);
  index++;
}
