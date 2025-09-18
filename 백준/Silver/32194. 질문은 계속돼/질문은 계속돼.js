const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 첫 번째 질문을 제외한 질문의 개수, 1 <= N <= 200_000
const arr = [1];
const sumArr = [0];
let answer = "";

for (let i = 1; i <= N; i++) {
  sumArr.push(sumArr[i - 1] + arr[i - 1]);
  const [num, x, y] = input[i].split(" ").map(Number);

  if (num === 1) {
    if (sumArr[y] - sumArr[x - 1] === y - x + 1) {
      answer += "Yes\n";
      arr.push(1);
    } else {
      answer += "No\n";
      arr.push(0);
    }
  } else {
    if (sumArr[y] - sumArr[x - 1] === 0) {
      answer += "Yes\n";
      arr.push(1);
    } else {
      answer += "No\n";
      arr.push(0);
    }
  }
}

console.log(answer.trim());