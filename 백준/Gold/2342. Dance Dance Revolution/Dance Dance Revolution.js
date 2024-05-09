const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const arr = new Int8Array(input.split(" ").map(Number));
const cache = new Map();

const solve = (index, p1, p2) => {
  if (arr[index] === 0) {
    return 0;
  } else if (cache.get(`${index} ${p1} ${p2}`) !== undefined) {
    return cache.get(`${index} ${p1} ${p2}`);
  }

  let result = Number.MAX_SAFE_INTEGER;
  if (arr[index] === p1 || arr[index] === p2) {
    result = 1 + solve(index + 1, p1, p2);
  } else {
    if (p1 === 0) {
      result = Math.min(result, 2 + solve(index + 1, arr[index], p2));
    } else if (Math.abs(arr[index] - p1) === 2) {
      result = Math.min(result, 4 + solve(index + 1, arr[index], p2));
    } else {
      result = Math.min(result, 3 + solve(index + 1, arr[index], p2));
    }

    if (p2 === 0) {
      result = Math.min(result, 2 + solve(index + 1, p1, arr[index]));
    } else if (Math.abs(arr[index] - p2) === 2) {
      result = Math.min(result, 4 + solve(index + 1, p1, arr[index]));
    } else {
      result = Math.min(result, 3 + solve(index + 1, p1, arr[index]));
    }
  }

  cache.set(`${index} ${p1} ${p2}`, result);
  return result;
};
console.log(solve(0, 0, 0));
