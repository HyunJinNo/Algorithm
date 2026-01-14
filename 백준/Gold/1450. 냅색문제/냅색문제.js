const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 물건의 수, 1 <= N <= 30
// C: 최대 용량, 0 <= C <= 1_000_000_000
const [N, C] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 1_000_000_000

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
const rightSums = getSubsetSums(rightArr).sort((a, b) => a - b);
let answer = 0;

for (const leftSum of leftSums) {
  if (leftSum > C) {
    continue;
  }

  let left = -1;
  let right = rightSums.length;

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    const rightSum = rightSums[mid];

    if (leftSum + rightSum <= C) {
      left = mid;
    } else {
      right = mid;
    }
  }

  answer += left + 1;
}

console.log(answer);