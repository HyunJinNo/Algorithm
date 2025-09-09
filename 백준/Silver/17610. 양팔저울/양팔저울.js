const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const k = Number(input[0]); // 추의 개수, 3 <= k <= 13
const g = input[1].split(" ").map(Number); // 추의 무게, 1 <= g[i] <= 200_000
const numSet = new Set(); // 측정 가능한 경우의 수 목록

const findAnswer = (index, sum) => {
  if (index === k) {
    if (sum > 0) {
      numSet.add(sum);
    }
    return;
  }

  findAnswer(index + 1, sum + g[index]);
  findAnswer(index + 1, sum - g[index]);
  findAnswer(index + 1, sum);
};

findAnswer(0, 0);
console.log(g.reduce((total, current) => total + current, 0) - numSet.size);