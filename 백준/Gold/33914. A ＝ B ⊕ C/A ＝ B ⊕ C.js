const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();

// X: 1의 개수, 0 <= X <= 3_000
// Y: 0의 개수, 0 <= Y <= 3_000
const [X, Y] = input.split(" ").map(Number);
const MOD = 1_000_000_007;
const cache = Array.from({ length: X + 1 }, () => Array(Y + 1).fill(-1));

/**
 * 0 = 0 ^ 0
 * 0 = 1 ^ 1
 * 1 = 0 ^ 1
 * 1 = 1 ^ 0
 */

/**
 * @param {number} x 남아있는 1의 개수
 * @param {number} y 남아있는 0의 개수
 * @returns {number}
 */
const findAnswer = (x, y) => {
  if (x === 0 && y === 0) {
    return 1;
  } else if (cache[x][y] !== -1) {
    return cache[x][y];
  }

  let result = 0;

  // 0 = 0 ^ 0
  if (y >= 3) {
    result += findAnswer(x, y - 3);
    result %= MOD;
  }

  // 0 = 1 ^ 1
  // 1 = 0 ^ 1
  // 1 = 1 ^ 0
  if (x >= 2 && y >= 1) {
    result += findAnswer(x - 2, y - 1) * 3;
    result %= MOD;
  }

  cache[x][y] = result;
  return result;
};

console.log(findAnswer(X, Y));