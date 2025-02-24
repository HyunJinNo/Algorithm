const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 정수의 개수, 1 <= N <= 20
// -1_000_000 <= S <= 1_000_000
const [N, S] = input[0].split(" ").map(Number);
const arr = new Int32Array(input[1].split(" ").map(Number)); // -100_000 <= arr[i] <= 100_000
let answer = 0;

const solution = (index, sum) => {
  if (index >= N) {
    if (sum === S) {
      answer++;
    }
    return;
  }

  solution(index + 1, sum);
  solution(index + 1, sum + arr[index]);
};

solution(0, 0);
console.log(S === 0 ? answer - 1 : answer);
