const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 세로 크기, 1 <= N <= 50
// M: 가로 크기, 1 <= M <= 50
const [N, M] = input[0].trim().split(" ").map(Number);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].trim().split(""));
}

const cache = Array.from(Array(N), () => Array(M).fill(-1));

const solve = (row, col) => {
  if (row < 0 || row >= N || col < 0 || col >= M) {
    return 0;
  } else if (arr[row][col] === "H") {
    cache[row][col] = 0;
    return 0;
  } else if (cache[row][col] === 0) {
    cache[row][col] = Infinity;
    return Infinity;
  } else if (cache[row][col] !== -1) {
    return cache[row][col];
  }

  cache[row][col] = 0;

  const num = Number(arr[row][col]);
  let result = 0;

  result = Math.max(
    1 + solve(row - num, col),
    1 + solve(row + num, col),
    1 + solve(row, col - num),
    1 + solve(row, col + num)
  );

  cache[row][col] = result;
  return result;
};

const answer = solve(0, 0);
if (answer === Infinity) {
  console.log(-1);
} else {
  console.log(answer);
}
