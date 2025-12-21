const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]); // 행렬의 개수, 1 <= N <= 500
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const cache = Array.from({ length: N }, () => Array(N).fill(-1));

const findAnswer = (startIndex, endIndex) => {
  if (startIndex === endIndex) {
    return 0;
  } else if (cache[startIndex][endIndex] !== -1) {
    return cache[startIndex][endIndex];
  } else if (startIndex + 1 === endIndex) {
    cache[startIndex][endIndex] = arr[startIndex][0] * arr[startIndex][1] * arr[endIndex][1];
    return cache[startIndex][endIndex];
  }

  let result = Number.MAX_SAFE_INTEGER;

  for (let i = startIndex; i < endIndex; i++) {
    result = Math.min(
      result,
      findAnswer(startIndex, i) + findAnswer(i + 1, endIndex) + arr[startIndex][0] * arr[i][1] * arr[endIndex][1],
    );
  }

  cache[startIndex][endIndex] = result;
  return result;
};

console.log(findAnswer(0, N - 1));