const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require('fs').readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 사람과 일의 수, 1 <= n <= 20
const cache = Array.from(Array(n), () => new Array(1 << n).fill(-1));
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

/**
 * 모든 일을 하는데 필요한 비용의 최솟값을 구하는 함수
 * @param {number} index (index)번째 사람
 * @param {number} visited 지금까지 한 일
 * @returns 최소 비용 값
 */
const solve = (index, visited) => {
  if (index >= n) {
    return 0;
  } else if (cache[index][visited] !== -1) {
    return cache[index][visited];
  }

  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if ((~visited & (1 << i)) === (1 << i)) {
      visited |= (1 << i);
      result = Math.min(result, arr[index][n - 1 - i] + solve(index + 1, visited));
      visited &= ~(1 << i);
    }
  }

  cache[index][visited] = result;  
  return result;
}
console.log(solve(0, 0));