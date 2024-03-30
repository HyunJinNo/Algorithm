const path: string = (process.platform === "linux") ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: Array<string> = require("fs").readFileSync(path).toString().split("\n");

// n: 문제의 개수, 1 <= n <= 15
// l: 최소 문제 난이도의 합
// r: 최대 문제 난이도의 합
// x: 가장 어려운 문제와 가장 쉬운 문제의 난이도 차이
const [n, l, r, x] = input[0].split(" ").map(Number);

// 문제의 난이도
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 1,000,000

/**
 * 선택한 문제의 수를 반환하는 함수
 * @param choice 선택한 문제 집합
 * @returns 선택한 문제의 수
 */
const bitCount = (choice: number): number => {
  if (choice === 0) {
    return 0;
  } else {
    return choice % 2 + bitCount(Math.floor(choice / 2));
  }
}

const check = (choice: number): Boolean => {
  let sum = 0;
  let easy = 1000001;
  let hard = 0;

  for (let i = 0; i < n; i++) {
    if (choice & (1 << i)) {
      sum += arr[i];
      easy = Math.min(easy, arr[i]);
      hard = Math.max(hard, arr[i]);
    }
  }

  return (sum >= l && sum <= r && (hard - easy) >= x) ? true : false;
}

let answer = 0;
for (let choice = (1 << n) - 1; choice > 0; choice = ((choice - 1) & ((1 << n) - 1))) {
  if (bitCount(choice) >= 2 && check(choice)) {
    answer++;
  }
}
console.log(answer);