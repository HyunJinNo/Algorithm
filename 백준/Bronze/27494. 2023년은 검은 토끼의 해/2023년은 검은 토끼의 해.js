const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 흑묘 복권의 티켓 수, 1 <= N <= 10_000_000
let answer = 0;

for (let num = 2023; num <= N; num++) {
  const str = num.toString();
  const length = str.length;
  let step = 1;

  for (let i = 0; i < length; i++) {
    if (step === 1 && str[i] === "2") {
      step = 2;
    } else if (step === 2 && str[i] === "0") {
      step = 3;
    } else if (step === 3 && str[i] === "2") {
      step = 4;
    } else if (step === 4 && str[i] === "3") {
      answer++;
      break;
    }
  }
}

console.log(answer);