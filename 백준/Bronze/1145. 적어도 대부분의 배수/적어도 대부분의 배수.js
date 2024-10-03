const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const arr = input.trim().split(" ").map(Number);
arr.sort((a, b) => a - b);
let answer = arr[2];

while (true) {
  const count = arr.reduce((total, current) => {
    if (answer % current === 0) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);

  if (count >= 3) {
    console.log(answer);
    break;
  }

  answer++;
}
