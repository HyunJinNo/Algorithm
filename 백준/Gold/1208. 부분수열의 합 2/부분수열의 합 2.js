const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 정수의 개수, 1 <= N <= 40
// S: 합, -1_000_000 <= S <= 1_000_000
const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number); // -100_000 <= arr[i] <= 100_000

const leftArr = arr.slice(0, Math.floor(N / 2));
const rightArr = arr.slice(Math.floor(N / 2));

const getSubsetSums = (arr) => {
  const result = [];

  const dfs = (index, sum) => {
    if (index === arr.length) {
      result.push(sum);
      return;
    }

    // 해당 원소를 포함하는 경우
    dfs(index + 1, sum + arr[index]);

    // 해당 원소를 포함하지 않는 경우
    dfs(index + 1, sum);
  };

  dfs(0, 0);

  return result;
};

const leftSums = getSubsetSums(leftArr);
const rightSums = new Map();

for (const rightSum of getSubsetSums(rightArr)) {
  rightSums.set(rightSum, (rightSums.get(rightSum) ?? 0) + 1);
}

rightSums.set(0, rightSums.get(0) - 1);

let answer = 0;

for (const leftSum of leftSums) {
  if (leftSum === S) {
    answer++;
  }

  if (rightSums.has(S - leftSum)) {
    answer += rightSums.get(S - leftSum);
  }
}

console.log(S === 0 ? answer - 1 : answer);