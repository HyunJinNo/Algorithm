const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require('fs').readFileSync(path).toString().split("\n");

// n: 단어의 개수, 1 <= n <= 10,000
// m: 쿼리의 개수, 1 <= m <= 50,000
const [n, m] = input[0].trim().split(" ").map(Number);
const words = []; // 단어 목록

for (let i = 1; i <= n; i++) {
  let temp = 0;
  const word = input[i].trim();
  for (let j = 0; j < word.length; j++) {
    temp |= (1 << (word[j].charCodeAt() - "a".charCodeAt()));
  }
  words.push(temp);
}

let known = (1 << 26) - 1;
let answer = "";
for (let i = n + 1; i <= n + m; i++) {
  const [o, x] = input[i].trim().split(" ");
  
  if (!["a", "e", "i", "o", "u"].includes(x)) {
    if (o === "1") {
      known &= ~(1 << (x.charCodeAt() - "a".charCodeAt()));
    } else {
      known |= (1 << (x.charCodeAt() - "a".charCodeAt()));
    }  
  }

  let result = 0;
  for (let j = 0; j < words.length; j++) {
    if ((words[j] & known) === words[j]) {
      result++;
    }
  }
  answer += `${result}\n`;
}

console.log(answer);