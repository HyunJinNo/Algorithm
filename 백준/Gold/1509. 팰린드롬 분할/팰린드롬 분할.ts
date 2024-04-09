const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: string = require("fs").readFileSync(path).toString().trim();
const len = input.length; // 1 <= len <= 2_500
const cache = new Int16Array(len).fill(-1);
const isPalindrome = Array.from(Array(len), () => new Int8Array(len).fill(0)); // 0: 확인 X, -1: false, 1: true

const checkPalidrome = (start: number, end: number): boolean => {
  if (isPalindrome[start][end] !== 0) {
    return isPalindrome[start][end] === 1;
  } else if (start === end) {
    isPalindrome[start][end] = 1;
    return true;
  } else if (input[start] !== input[end]) {
    isPalindrome[start][end] = -1;
    return false;
  } else if (start + 1 === end) {
    isPalindrome[start][end] = 1;
    return true;
  } else {
    const result = checkPalidrome(start + 1, end - 1);
    isPalindrome[start][end] = result ? 1 : -1;
    return result;
  }
};

/**
 * 주어진 index부터 끝까지의 부분 문자열에서 팰린드롬 분할 개수의 최솟값을 반환하는 함수
 * @param index 시작 index
 * @returns 팰린드롬 분할 개수의 최솟값
 */
const solve = (index: number): number => {
  if (index >= len) {
    return 0;
  } else if (cache[index] !== -1) {
    return cache[index];
  }

  let result = len - index;

  for (let end = index; end < len; end++) {
    if (checkPalidrome(index, end)) {
      result = Math.min(result, 1 + solve(end + 1));
    }
  }
  cache[index] = result;
  return result;
};

console.log(solve(0));
