const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim();

const buildLPS = (pattern) => {
  const lps = Array(pattern.length).fill(0);
  let len = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i++] = len;
    } else {
      if (len === 0) {
        lps[i++] = 0;
      } else {
        len = lps[len - 1];
      }
    }
  }

  return lps;
};

let answer = 0;

for (let i = 0; i < input.length; i++) {
  answer = Math.max(answer, Math.max(...buildLPS(input.slice(i))));
}

console.log(answer);