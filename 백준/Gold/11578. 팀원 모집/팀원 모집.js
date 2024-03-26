const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require('fs').readFileSync(path).toString().split("\n");

// n: 문제의 수, 1 <= n <= 10
// m: 팀원으로 고를 수 있는 학생들의 수, 1 <= m <= 10
const [n, m] = input[0].trim().split(" ").map(Number);

// 각 학생이 풀 수 있는 문제들의 집합
const student = [];

for (let i = 1; i <= m; i++) {
  let canSolve = 0;
  const temp = input[i].trim().split(" ").map(Number);
  const o = temp.shift();
  for (let j = 0; j < o; j++) {
    canSolve |= (1 << (temp[j] - 1));
  }
  student.push(canSolve);
}

const findAnswer = (index, canSolve) => {
  if (canSolve === ((1 << n) - 1)) {
    return 0;
  } else if (index >= m) {
    return Infinity
  }

  // [index] 학생을 선택하지 않는 경우
  let result = findAnswer(index + 1, canSolve);

  // [index] 학생을 선택하는 경우
  canSolve |= student[index];
  result = Math.min(result, 1 + findAnswer(index + 1, canSolve));

  return result;
}

const result = findAnswer(0, 0, 0);
console.log(`${result === Infinity ? -1 : result}`);