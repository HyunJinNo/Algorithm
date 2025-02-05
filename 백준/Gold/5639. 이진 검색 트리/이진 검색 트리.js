const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const arr = input.map((str) => Number(str));

/**
 * @param {number} startIndex
 * @param {number} endIndex
 * @returns {string} 후위 순회한 결과
 */
const solution = (startIndex, endIndex) => {
  if (startIndex === endIndex) {
    return arr[startIndex];
  } else if (startIndex > endIndex) {
    return "";
  }

  let result = "";
  const root = arr[startIndex];
  const rightSubTreeStartIndex = arr
    .slice(startIndex, endIndex + 1)
    .findIndex((value) => value > root);

  if (rightSubTreeStartIndex === -1) {
    result += `${solution(startIndex + 1, endIndex)}\n`;
    result += `${root}\n`;
  } else {
    result += `${solution(
      startIndex + 1,
      startIndex + rightSubTreeStartIndex - 1,
    )}\n`;
    result += `${solution(startIndex + rightSubTreeStartIndex, endIndex)}\n`;
    result += `${root}\n`;
  }

  return result.trim();
};

console.log(solution(0, arr.length - 1));
