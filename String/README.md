<h1>String</h1>
<br>

## Introduction
- **Definition**
  - <b>문자열(String)</b>은 현대의 컴퓨터에서 다루는 자료 중 하나이다. 
  - 문자열은 정보 검색(Information Retrieval)이나 생물 정보학(Bioinformatics) 분야에서 특히 유용하게 사용된다.
  - **주요 용어**
    > **부분 문자열(Substring)**: 문자열 S의 i번 글자부터 j번 글자까지로 구성된 문자열을 S의 부분 문자열(Substring)이라고 부른다.

    > **접두사(Prefix)**: 문자열 S의 0번 글자부터 a번 글자까지로 구성된 부분 문자열을 S의 접두사(Suffix)라고 부른다.

    > **접미사(Suffix)**: 문자열 S의 b번 글자부터 끝까지로 구성된 부분 문자열을 S의 접미사(Suffix)라고 부른다.
  - **문자열 검색**: 주어진 긴 문자열 H가 짧은 문자열 N을 부분 문자열로 포함하는지 확인하고, 포함한다면 N과 일치하는 부분 문자열의 시작 위치를 찾는 문제를 **문자열 검색 문제**라고 한다.
- **KMP 알고리즘**
  - **KMP(Knuth-Morris-Pratt) 알고리즘**은 불일치가 일어났을 때 지금까지 일치한 글자의 수를 이용해 다음으로 시도해야 할 시작 위치를 빠르게 찾아내는 문자열 검색 알고리즘이다.
  - KMP 알고리즘을 사용하면 <code><b>O(H + N)</b></code>에 문자열 검색을 할 수 있다.
- **접미사 배열(Suffix Array)**
  - ?

<br>

## How to Use
- **KMP 알고리즘**
  ```ts
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
  ```
  ```ts
  // TypeScript

  
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
          result.push(begin);
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
  ```
- ?

<br>

## Examples
- ?
