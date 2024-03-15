const path = (process.platform === "linux") ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(path).toString().trim().split("\n");
const T = Number(input[0]); // 1 <= T <= 100,000
let answer = "";

for (let i = 1; i <= T; i++) {
  // 0 <= l <= r <= 1,000,000,000
  const [l, r] = input[i].split(" ").map(Number);

  if (r >= 4) {
    answer += `${r}\n`;
  } else {
    let num = 0;
    for (let x = l; x <= r; x++) {
      num *= 10;
      num += Math.pow(2, x);
    }

    let count = 0;
    while (num % 2 === 0) {
      num /= 2;
      count++;
    }
    answer += `${count}\n`;
  }
}

console.log(answer);