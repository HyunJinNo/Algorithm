const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();

const x = Number(input); // 1 <= x <= 1_000_000_000_000
const primeFactor = new Map();
let num = x + 1;
let divisor = 2;

while (num > 1) {
  if (num % divisor === 0) {
    num /= divisor;
    primeFactor.set(divisor, (primeFactor.get(divisor) ?? 0) + 1);
  } else if (divisor * divisor > num) {
    primeFactor.set(num, 1);
    break;
  } else {
    divisor++;
  }
}

const answer = [];
const entries = [...primeFactor.entries()];

const solve = (k, index) => {
  if (index === entries.length) {
    if (k <= x) {
      answer.push(k);
    }
    return;
  }

  for (let i = 0; i <= entries[index][1]; i++) {
    solve(k * Math.pow(entries[index][0], i), index + 1);
  }
};

solve(1, 0);
answer.sort((a, b) => a - b);
console.log(answer.join(" ").trim());