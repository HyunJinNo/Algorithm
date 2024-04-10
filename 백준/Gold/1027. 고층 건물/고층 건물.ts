const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const n = Number(input[0]); // 빌딩의 수, 1 <= n <= 50
const building = input[1].split(" ").map(Number); // 각 빌딩의 높이, 1 <= building[i] <= 1_000_000_000

/**
 * [index]번째 빌딩에서 보이는 빌딩의 수를 계산하는 함수
 * @param index [index]번째 빌딩
 * @returns [index]번째 빌딩에서 보이는 빌딩의 수
 */
const solve = (index: number): number => {
  let result = 0;

  for (let i = 0; i < index; i++) {
    let flag = true;
    for (let j = i + 1; j < index; j++) {
      const height =
        ((building[index] - building[i]) * (j - index)) / (index - i) +
        building[index];
      if (height <= building[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result++;
    }
  }
  for (let i = index + 1; i < n; i++) {
    let flag = true;
    for (let j = index + 1; j < i; j++) {
      const height =
        ((building[i] - building[index]) * (j - index)) / (i - index) +
        building[index];
      if (height <= building[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result++;
    }
  }

  return result;
};

let answer = 0; // 가장 많이 보이는 빌딩의 수
for (let i = 0; i < n; i++) {
  answer = Math.max(answer, solve(i));
}
console.log(answer);
