const path = (process.platform === "linux") ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// n: 단어의 개수, 1 <= n <= 50
// k: 가르칠 글자의 개수, 0 <= k <= 26
const [n, k] = input[0].split(" ").map(Number);

// 각 단어에 대해 알아야 할 글자의 집합
const words = [];
for (let i = 1; i <= n; i++) {
  let known = 0;
  for (const c of input[i].trim()) {
    known |= (1 << (c.charCodeAt(0) - "a".charCodeAt(0)));
  }
  words.push(known)
}

/**
 * 알고 있는 글자의 집합이 주어질 때, 읽을 수 있는 단어의 개수를 반환하는 함수
 * @param x 알고 있는 글자의 집합
 * @returns 읽을 수 있는 단어의 개수
 */
const findCount = (x) => {
  let result = 0;
  words.forEach((element) => {
    if ((element & x) === element) {
      result++;
    }
  });
  return result;
}

const solve = (index, known, count) => {
  if (count === k) {
    answer = Math.max(answer, findCount(known));
    return;
  } else if (index >= 26) {
    return;
  }

  // [index] 번째 비트를 켜지 않는 경우
  solve(index + 1, known, count);

  // [index] 번째 비트를 켜는 경우
  known |= (1 << index);
  solve(index + 1, known, count + 1);
}

let answer = 0;
solve(0, 0, 0);
console.log(answer);