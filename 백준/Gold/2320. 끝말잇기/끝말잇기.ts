const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");

const n = Number(input[0]); // 단어의 개수, 1 <= n <= 16
const arr: string[] = []; // 사전에 포함된 단어들
for (let i = 1; i <= n; i++) {
  arr.push(input[i].trim());
}

const cache = Array.from(new Array(1 << n), () => new Int16Array(26).fill(-1));

/**
 * 끝말잇기 점수의 최댓값을 반환하는 함수
 * @param used 지금까지 사용한 단어 목록
 * @param lastLetter 이전 단어의 마지막 글자
 * @returns 끝말잇기 점수의 최댓값
 */
const solve = (used: number, lastLetter: string): number => {
  if (used === (1 << n) - 1) {
    return 0;
  } else if (cache[used][lastLetter.charCodeAt(0) - "A".charCodeAt(0)] !== -1) {
    return cache[used][lastLetter.charCodeAt(0) - "A".charCodeAt(0)];
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (
      (used & (1 << i)) === 0 &&
      (lastLetter === "" || lastLetter === arr[i][0])
    ) {
      const len = arr[i].length;
      result = Math.max(result, len + solve(used | (1 << i), arr[i][len - 1]));
    }
  }

  cache[used][lastLetter.charCodeAt(0) - "A".charCodeAt(0)] = result;
  return result;
};

let answer = 0;
for (let i = 0; i < n; i++) {
  const len = arr[i].length;
  answer = Math.max(answer, len + solve(1 << i, arr[i][len - 1]));
}
console.log(answer);
