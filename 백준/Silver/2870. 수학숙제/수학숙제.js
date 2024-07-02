const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const n = Number(input[0]); // 종이의 줄의 개수, 1 <= n <= 100
const numbers = [];

for (let i = 1; i <= n; i++) {
  const str = input[i].trim();
  let numStr = "";

  for (let c of str) {
    if (!Number.isNaN(Number(c))) {
      numStr += c;
    } else if (numStr.length !== 0) {
      numbers.push(BigInt(numStr));
      numStr = "";
    }
  }

  if (numStr.length !== 0) {
    numbers.push(BigInt(numStr));
  }
}

let answer = "";
numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
for (let num of numbers) {
  answer += `${num}\n`;
}

console.log(answer);
