const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 우리의 크기, 1 <= N <= 100_000
const cache = Array.from({ length: 3 }, () => Array(N).fill(-1));

const solution = (before, depth) => {
  if (depth === N) {
    return 1;
  } else if (cache[before][depth] !== -1) {
    return cache[before][depth];
  }

  let result = 0;

  switch (before) {
    case 0:
      result +=
        solution(0, depth + 1) +
        solution(1, depth + 1) +
        solution(2, depth + 1);
      break;
    case 1:
      result += solution(0, depth + 1) + solution(2, depth + 1);
      break;
    case 2:
      result += solution(0, depth + 1) + solution(1, depth + 1);
      break;
    default:
      break;
  }

  cache[before][depth] = result % 9901;
  return cache[before][depth];
};

console.log(solution(0, 0));
