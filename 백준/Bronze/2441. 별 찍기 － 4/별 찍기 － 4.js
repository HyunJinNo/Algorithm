const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 1 <= N <= 100

for (let row = 0; row < N; row++) {
  let str = "";

  for (let col = 0; col < row; col++) {
    str += " ";
  }
  for (let col = row; col < N; col++) {
    str += "*";
  }
  console.log(str);
}
