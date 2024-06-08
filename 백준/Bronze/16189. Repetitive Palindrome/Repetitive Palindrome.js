const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const s = input[0].trim(); // 1 <= s.length <= 250_000
let startIndex = 0;
let lastIndex = s.length - 1;
let flag = true;

while (startIndex <= lastIndex) {
  if (s[startIndex] !== s[lastIndex]) {
    flag = false;
    break;
  } else {
    startIndex++;
    lastIndex--;
  }
}

if (flag) {
  console.log("YES");
} else {
  console.log("NO");
}
