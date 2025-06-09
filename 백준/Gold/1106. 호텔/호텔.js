const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// C: 늘려야하는 고객의 수, 1 <= C <= 1_000
// 1 <= N <= 20
const [C, N] = input[0].split(" ").map(Number);
const arr = [];
const cache = Array.from({ length: N }, () => Array(C).fill(-1));

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  return b[1] / b[0] - a[1] / a[0];
});

const solution = (index, count) => {
  if (count >= C) {
    return 0;
  } else if (index >= N) {
    return Number.MAX_SAFE_INTEGER;
  } else if (cache[index][count] !== -1) {
    return cache[index][count];
  }

  let result = solution(index + 1, count);

  for (let i = index; i < N; i++) {
    result = Math.min(
      result,
      arr[index][0] + solution(index, count + arr[index][1]),
    );
  }

  cache[index][count] = result;
  return result;
};

console.log(solution(0, 0));
