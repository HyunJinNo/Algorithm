const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const N = Number(input); // 1 <= N <= 1_000_000
const isPrime = Array(N + 1).fill(false);
const visited = Array(N + 1).fill(false);
isPrime[2] = true;
visited[2] = true;

for (let x = 3; x <= N; x += 2) {
  if (!visited[x]) {
    let flag = true;
    for (let y = 2; y <= Math.floor(Math.sqrt(x)); y++) {
      if (x % y === 0) {
        flag = false;
        break;
      }
    }

    isPrime[x] = flag;
    visited[x] = true;

    let multiplier = x;
    while (x * multiplier <= N) {
      isPrime[x * multiplier] = false;
      visited[x * multiplier] = true;
      multiplier += x;
    }
  }
}

let answer = [0, 0, 0, 0];
const primeNums = isPrime
  .map((value, index) => (value ? index : 0))
  .filter((value) => value !== 0);

const solution = (index, num) => {
  if (index === 3) {
    if (isPrime[num]) {
      answer[3] = num;
      console.log(answer.join(" "));
      process.exit();
    }
    return;
  }

  for (const primeNum of primeNums) {
    if (primeNum >= num) {
      break;
    }

    answer[index] = primeNum;
    solution(index + 1, num - primeNum);
  }
};

solution(0, N);
console.log(-1);
