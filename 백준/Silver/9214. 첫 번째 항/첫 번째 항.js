const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

/**
 * @param {string} before
 * @param {string} after
 * @returns {boolean}
 */
const check = (before, after) => {
  let result = "";
  let current = before[0];
  let count = 0;

  for (const c of before) {
    if (c === current) {
      count++;
    } else {
      result += `${count}${current}`;
      current = c;
      count = 1;
    }
  }

  result += `${count}${current}`;
  return result === after;
};

/**
 * @param {string} str
 * @returns {string}
 */
const solve = (str) => {
  let result = str;

  while (result.length % 2 === 0) {
    let temp = "";

    const length = result.length;
    for (let i = 0; i < length; i += 2) {
      const count = result[i];
      const num = result[i + 1];
      temp += num.repeat(count);
    }

    if (result === temp) {
      return result;
    } else if (!check(temp, result)) {
      return result;
    } else {
      result = temp;
    }
  }

  return result;
};

const length = input.length;
for (let i = 0; i < length; i++) {
  const str = input[i].trim();

  if (str === "0") process.exit();

  console.log(`Test ${i + 1}: ${solve(str)}`);
}
