const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 단어의 개수, 1 <= n <= 25
const words = []; // 각 단어에 사용된 알파벳의 집합

for (let i = 1; i <= n; i++) {
  const word = input[i].trim();
  let result = 0;
  for (const c of word) {
    result |= (1 << (c.charCodeAt(0) - "a".charCodeAt(0)));
  }
  words.push(result);
}

let answer = 0; // 만들 수 있는 테스트 문장의 개수

/**
 * 만들 수 있는 테스트 문장의 개수를 계산한다.
 * @param {number} index (index) 번째 단어
 * @param {number} used 지금까지 사용된 알파벳 종류
 */
const solve = (index, used) => {
  if (index == n) {
    if (used === ((1 << 26) - 1)) {
      answer++;
    }
    return;
  }

  // (index) 번째 단어를 사용하지 않는 경우
  solve(index + 1, used);

  // (index) 번째 단어를 사용하는 경우
  used |= words[index];
  solve(index + 1, used);
}

solve(0, 0);
console.log(answer);