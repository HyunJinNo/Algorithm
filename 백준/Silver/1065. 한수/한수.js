const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const N = Number(input); // 1 <= N <= 1_000
let answer = 0;

for (let x = 1; x <= N; x++) {
  if (x <= 99) {
    answer++;
    continue;
  } else if (x === 1000) {
    continue;
  }

  const str = x.toString();
  const a = Number(str[0]);
  const b = Number(str[1]);
  const c = Number(str[2]);

  if (a - b === b - c) {
    answer++;
  }
}
console.log(answer);