const path = (process.platform === "linux") ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(path).toString().trim();
const n = Number(input); // 수의 길이, 1 <= n <= 1,000

/**
 * 오르막 수의 개수를 구하는 함수
 * @param {number} length 현재 수의 길이
 * @param {number} currentNum 가장 마지막 자리 숫자
 * @returns {number} 오르막 수의 개수
 */
const solve = (length, currentNum) => {
  if (cache[length][currentNum] != -1) {
    return cache[length][currentNum];
  } else if (length === n) {
    cache[length][currentNum] = 1;
    return 1;
  }

  let result = 0;
  for (let num = currentNum; num <= 9; num++) {
    result += solve(length + 1, num);
    result %= 10007
  }

  cache[length][currentNum] = result;
  return result;
}


// [length][currentNum]
const cache = Array.from(new Array(n + 1), () => new Array(10).fill(-1));
console.log(solve(0, 0));