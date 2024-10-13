const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 예술가의 수, 2 <= N <= 15
const cache = Array.from(Array(N), () =>
  Array.from(Array(10), () => new Array(1 << N).fill(-1)),
); // [index][cost][visited]
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].trim().split("").map(Number));
}

const solve = (index, cost, visited) => {
  if (cache[index][cost][visited] !== -1) {
    return cache[index][cost][visited];
  }

  let result = 0;

  for (let i = 0; i < N; i++) {
    if ((~visited & (1 << i)) === 1 << i && arr[index][i] >= cost) {
      visited |= 1 << i;
      result = Math.max(result, 1 + solve(i, arr[index][i], visited));
      visited &= ~(1 << i);
    }
  }

  cache[index][cost][visited] = result;
  return result;
};

const answer = solve(0, 0, 1);
console.log(1 + answer);
