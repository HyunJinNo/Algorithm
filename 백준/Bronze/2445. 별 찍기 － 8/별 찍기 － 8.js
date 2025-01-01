const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 1 <= N <= 100

/**
 * @param {number} num
 */
const printLine = (num) => {
  let result = "";

  for (let j = 0; j < num; j++) {
    result += "*";
  }

  for (let j = 0; j < (N - num) * 2; j++) {
    result += " ";
  }

  for (let j = 0; j < num; j++) {
    result += "*";
  }

  console.log(result);
};

for (let i = 1; i <= N; i++) {
  printLine(i);
}

for (let i = N - 1; i >= 1; i--) {
  printLine(i);
}
