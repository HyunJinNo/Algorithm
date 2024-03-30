const path: string = (process.platform === "linux") ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: Array<string> = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 단어의 개수, 1 <= n <= 25
const words: Array<number> = []; // 각 단어에 사용된 알파벳의 집합

for (let i = 1; i <= n; i++) {
  const word = input[i].trim();
  let result = 0;
  for (let j = 0; j < word.length; j++) {
    result |= (1 << (word[j].charCodeAt(0) - "a".charCodeAt(0)));
  }
  words.push(result);
}

let answer = 0; // 만들 수 있는 테스트 문장의 개수
const solve = (index: number, used: number) => {
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